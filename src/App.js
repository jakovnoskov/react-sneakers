
import React from 'react'
import { Routes, Route} from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Drawer from './components/Drawer'

import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
import AppContext from './context'


function App() {  
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  const sneakersUrl = 'https://63384660937ea77bfdbd5dae.mockapi.io/items'
  const cartUrl = 'https://63384660937ea77bfdbd5dae.mockapi.io/cart'
  const favoritesUrl = 'https://63384660937ea77bfdbd5dae.mockapi.io/favorites'

  React.useEffect(() => {

    async function fetchData() {
      const itemsResponse = await axios.get(sneakersUrl)
      const cartResponse = await axios.get(cartUrl)
      const favoritesResponse = await axios.get(favoritesUrl)

      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)    
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const onAddToCard = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`${cartUrl}/${obj.id}`)
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        axios.post(cartUrl, obj)
        setCartItems((prev) => [...prev, obj])  
      }

    } catch (error) {
      alert('Не удалось добавить ')
    }

  }

  const onRemoveItem = (obj) => {
    axios.delete(`${cartUrl}/${obj.id}`)
    setCartItems((prev) => prev.filter(item => item.id !== obj.id))
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(objF => objF.id === obj.id)) {
        axios.delete(`${favoritesUrl}/${obj.id}`)
        setFavorites((prev) => prev.filter(item => item.id !== obj.id))
      } else {
        const { data } = await axios.post(favoritesUrl, obj)
        setFavorites((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты')
    }
  }


  React.useEffect(() => {
    cartOpened ? 
      document.body.classList.add('modal-open') : 
      document.body.classList.remove('modal-open')
}, [cartOpened] )

  const isItemAdded = (id) => {
    console.log("СИК")
    console.log(id)
    return cartItems.some((obj) => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded }}>
    <div className="wrapper clear">
      {
        cartOpened && 
        <Drawer 
          onClose={() => setCartOpened(false)}
          items={cartItems}
          onRemove={(obj) => onRemoveItem(obj)}
        /> 
      }
      <Header
       onClickCart={() => setCartOpened(true)}
      />
      <Routes>

        <Route path="/" element={
          <Home 
            items={items}
            cartItems={cartItems}
            isLoading={isLoading}
            onClickFovarite={(obj) => onAddToFavorite(obj)}
            onClickPlus={(obj) => onAddToCard(obj)}
          />
        }/>

        <Route path="/favorites" element={
          <Favorites 
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
