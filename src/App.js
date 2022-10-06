
import React from 'react'
import { Routes, Route} from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Drawer from './components/Drawer'
import MobileMenu from './components/MobileMenu'
import GlobalLoader from './components/GlobalLoader'

import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Orders from './pages/Orders'
import NotFound from './pages/NotFound'
import AppContext from './context'


function App() {  
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [mobileMenuOpened, setMobileMenuOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  const [isLoadingFavorite, setIsLoadingFavorite] = React.useState(false)
  const [globalLoading, setGlobalLoading] = React.useState(false)

  //const showCase = '/react-sneakers/'
  const showCase = '/'
  const sneakersUrl = 'https://63384660937ea77bfdbd5dae.mockapi.io/items'
  const cartUrl = 'https://63384660937ea77bfdbd5dae.mockapi.io/cart'
  const favoritesUrl = 'https://63384660937ea77bfdbd5dae.mockapi.io/favorites'

  React.useEffect(() => {

    async function fetchData() {
        setIsLoadingFavorite(true)
        try {
          const [itemsResponse, cartResponse, favoritesResponse] = await Promise.all([
            axios.get(sneakersUrl),
            axios.get(cartUrl),
            axios.get(favoritesUrl)
          ])

          setCartItems(cartResponse.data)
          setFavorites(favoritesResponse.data)
          setItems(itemsResponse.data)
        } catch (error) {
          console.error(error)
          alert('Ошибка при запрсе данных')
        }

        setIsLoading(false)
        setIsLoadingFavorite(false)
    }
    fetchData()
  }, [])

  const onAddToCard = async (obj) => {
    setGlobalLoading(true)
    try {
      
      if (cartItems.find((item) => Number(item.productId) === Number(obj.productId))) {
        setCartItems(prev => prev.filter(item => Number(item.productId) !== Number(obj.productId)))
        const dellInCart = cartItems.find((item) => Number(item.productId) === Number(obj.productId))
        await axios.delete(`${cartUrl}/${dellInCart.id}`)
      } else {
        // меняем id что бы был одинаковый порядок с api
        // считаем id от последнего элемента в корзине 
        obj.id = (cartItems.length > 0 ? Number(cartItems[cartItems.length-1].id) + 1 : 1)
        setCartItems((prev) => [...prev, obj])  
        await axios.post(cartUrl, obj) 
      }

    } catch (error) {
      console.error(error)
      alert('Не удалось добавить в корзину')
    }
    setGlobalLoading(false)
  }

  const onRemoveItem = (obj) => {
    try {
      axios.delete(`${cartUrl}/${obj.id}`)
      setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)))    
    } catch (error) {
      console.error(error)
      alert('Не удалось удалить элемент')
    }

  }

  const onAddToFavorite = async (obj) => {
    setGlobalLoading(true)
    try {
     // setIsLoadingFavorite(true)
      if (favorites.find(objF =>  Number(objF.productId) ===  Number(obj.productId))) {
        setFavorites((prev) => prev.filter(item => Number(item.productId) !== Number(obj.productId)))
        const dellFovaObj = favorites.find(objF =>  Number(objF.productId) ===  Number(obj.productId))
        // console.log(dellFovaObj.id)
        // console.log(`${favoritesUrl}/${dellFovaObj.id}`)
        await axios.delete(`${favoritesUrl}/${dellFovaObj.id}`)
      } else {
        const { data } = await axios.post(favoritesUrl, obj)
        setFavorites((prev) => [...prev, data])
      }
      //setIsLoadingFavorite(false)

    } catch (error) {
      console.error(error)
      alert('Не удалось добавить в фавориты')
    }
    setGlobalLoading(false)
  }


  React.useEffect(() => {
    cartOpened ? 
      document.body.classList.add('modal-open') : 
      document.body.classList.remove('modal-open')
}, [cartOpened] )

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.productId) === Number(id))
  }

  const isItemFavorited = (id) => {
    return favorites.some((obj) => Number(obj.productId) === Number(id))
  }

  return (
    <AppContext.Provider 
      value={{ 
        items, 
        cartItems, 
        favorites, 
        showCase,
        isLoading,
        isLoadingFavorite,
        mobileMenuOpened,
        isItemAdded, 
        isItemFavorited,
        setCartOpened,
        setCartItems,
        setGlobalLoading,
        onAddToFavorite,
        onAddToCard,
        setMobileMenuOpened
      }}>

    {globalLoading && <GlobalLoader />}   
    <div className="wrapper clear">
      <Drawer 
        onClose={() => setCartOpened(false)}
        items={cartItems}
        opened={cartOpened}
        onRemove={(obj) => onRemoveItem(obj)}
      /> 
      <MobileMenu />
      <Header />
      <Routes>

        <Route path={`${showCase}`} element={
          <Home 
            items={items}
            cartItems={cartItems}
            isLoading={isLoading}
            onClickFovarite={(obj) => onAddToFavorite(obj)}
            onClickPlus={(obj) => onAddToCard(obj)}
          />
        }/>

        <Route path={`${showCase}favorites`} element={
          <Favorites 
            onClickFovarite={(obj) => onAddToFavorite(obj)}
            onClickPlus={(obj) => onAddToCard(obj)}
            cardItems={favorites}
          />
        }/>

        <Route path={`${showCase}orders`} element={
          <Orders 
            onClickFovarite={(obj) => onAddToFavorite(obj)}
            onClickPlus={(obj) => onAddToCard(obj)}
            cardItems={favorites}
          />
        }/>

        <Route path="*" element={
          <NotFound />
        }/>

      </Routes>
    </div>
    </AppContext.Provider>
  )
}

export default App
