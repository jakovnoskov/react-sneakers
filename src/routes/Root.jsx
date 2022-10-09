import React from 'react'
import {Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Drawer from '../components/Drawer'
import MobileMenu from '../components/MobileMenu'
import GlobalLoader from '../components/GlobalLoader'
import AppContext from '../context'
import axios from 'axios'
import '../scss/app.scss'

export default function Root() {
  const [sneakers, setSneakers] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [mobileMenuOpened, setMobileMenuOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  const [globalLoading, setGlobalLoading] = React.useState(false)
  const [isLoadingFavorite, setIsLoadingFavorite] = React.useState(false)
  const [cartLoading, setCartLoading] = React.useState(false)

  //const showCase = '/react-sneakers/'
  const showCase = '/'
  //const showCase = ''
  const sneakersUrl = 'https://63384660937ea77bfdbd5dae.mockapi.io/items'
  const cartUrl = 'https://63384660937ea77bfdbd5dae.mockapi.io/cart'
  const favoritesUrl = 'https://63384660937ea77bfdbd5dae.mockapi.io/favorites'

  React.useEffect(() => {
    async function fetchData() {
        try {
          const [itemsResponse, cartResponse, favoritesResponse] = await Promise.all([
            axios.get(sneakersUrl),
            axios.get(cartUrl),
            axios.get(favoritesUrl)
          ])
          setCartItems(cartResponse.data)
          setFavorites(favoritesResponse.data)
          setSneakers(itemsResponse.data)
        } catch (error) {
          console.error(error)
          alert('Ошибка при запрсе данных')
        }
        setIsLoading(false)
    }
    fetchData()
  }, [])

  const onAddToCard = async (obj) => {
    setCartLoading(true) // Включаем загрузку пока все элементы не добавятся в корзину на сервере
    try {
      if (cartItems.find((item) => Number(item.productId) === Number(obj.productId))) {
        setCartItems(prev => prev.filter(item => Number(item.productId) !== Number(obj.productId)))
        const dellInCart = cartItems.find((item) => Number(item.productId) === Number(obj.productId))
        await axios.delete(`${cartUrl}/${dellInCart.id}`)
        setCartLoading(false)
      } else {
        // меняем id что бы был одинаковый порядок с api
        // считаем id от последнего элемента в корзине 
        obj.id = (cartItems.length > 0 ? Number(cartItems[cartItems.length-1].id) + 1 : 1)
        setCartItems((prev) => [...prev, obj])  
        await axios.post(cartUrl, obj) 
        setCartLoading(false)
      }
     
    } catch (error) {
      setCartLoading(false)
      console.error(error)
      alert('Не удалось добавить в корзину')
    }
    
  }

  const onRemoveItem = async (obj) => {
    setCartLoading(true)
    try {
      setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)))  
      await axios.delete(`${cartUrl}/${obj.id}`)
      setCartLoading(false)  
    } catch (error) {
      console.error(error)
      alert('Не удалось удалить элемент')
      setCartLoading(false)
    }

  }

  const onAddToFavorite = async (obj) => {
    setIsLoadingFavorite(true) // Включаем загрузку для элементов интерфеса
    try {
      if (favorites.find(objF =>  Number(objF.productId) ===  Number(obj.productId))) {
        const dellFovaObj = favorites.find(objF =>  Number(objF.productId) ===  Number(obj.productId))
        await axios.delete(`${favoritesUrl}/${dellFovaObj.id}`)
        setFavorites((prev) => prev.filter(item => Number(item.productId) !== Number(obj.productId)))
        setIsLoadingFavorite(false)
      } else {
        // меняем id что бы был одинаковый порядок с api
        // считаем id от последнего элемента в корзине 
        obj.id = (favorites.length > 0 ? Number(favorites[favorites.length-1].id) + 1 : 1)
        setFavorites((prev) => [...prev, obj])
        const { data } = await axios.post(favoritesUrl, obj)
        setIsLoadingFavorite(false)
      }
    } catch (error) {
      console.error(error)
      alert('Не удалось добавить в фавориты')
      setIsLoadingFavorite(false)
    }
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
        sneakers, 
        cartItems, 
        favorites, 
        showCase,
        isLoading,
        isLoadingFavorite,
        cartLoading,
        mobileMenuOpened,
        cartOpened,
        isItemAdded, 
        isItemFavorited,
        setCartOpened,
        setCartItems,
        setGlobalLoading,
        onAddToFavorite,
        onAddToCard,
        setMobileMenuOpened,
        onRemoveItem,
      }}>
    {globalLoading && <GlobalLoader />}     
      <div className='wrapper clear'>
        <Drawer/>
        <MobileMenu/>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </AppContext.Provider>
  )
}