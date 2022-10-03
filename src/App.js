
import React from 'react'
import axios from 'axios'
import Header from './components/Header'
import Drawer from './components/Drawer'


import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'

import { Routes, Route} from 'react-router-dom'

/*
const arr = [
  {"id":1, "title":'Мужские Кроссовки Nike Blazer Mid Suede', "price": 12999, "imageUrl":'/img/sneakers/1.jpeg'},
  {"id":2, "title":'Мужские Кроссовки Nike Air Max 270', "price": 10499, "imageUrl":'/img/sneakers/2.jpeg'},
  {"id":3, "title":'Мужские Кроссовки Nike Blazer Mid Suede', "price": 8499, "imageUrl":'/img/sneakers/3.jpeg'},
  {"id":4, "title":'Кроссовки Puma X Aka Boku Future Rider', "price": 8999, "imageUrl":'/img/sneakers/4.jpeg'},
  {"id":5, "title":'Мужские Кроссовки Under Armour Curry 8', "price": 15199, "imageUrl":'/img/sneakers/5.jpeg'},
  {"id":6, "title":'Мужские Кроссовки Nike Kyrie 7', "price": 11299, "imageUrl":'/img/sneakers/6.jpeg'},
  {"id":7, "title":'Мужские Кроссовки Jordan Air Jordan 11', "price": 10799, "imageUrl":'/img/sneakers/7.jpeg'},
  {"id":8, "title":'Мужские Кроссовки Nike LeBron XVIII', "price": 16499, "imageUrl":'/img/sneakers/8.jpeg'},
  {"id":9, "title":'Мужские Кроссовки Nike Lebron XVIII Low', "price": 14999, "imageUrl":'/img/sneakers/9.jpeg'},
  {"id":10, "title":'Мужские Кроссовки Nike Blazer Mid Suede', "price": 8499, "imageUrl":'/img/sneakers/10.jpeg'},
  {"id":11, "title":'Кроссовки Puma X Aka Boku Future Rider', "price": 8999, "imageUrl":'/img/sneakers/11.jpeg'},
  {"id":12, "title":'Мужские Кроссовки Nike Kyrie Flytrap IV', "price": 11299, "imageUrl":'/img/sneakers/12.jpeg'}
]
*/

function App() {  
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])

  const [cartOpened, setCartOpened] = React.useState(false)

  const sneakersUrl = 'https://63384660937ea77bfdbd5dae.mockapi.io/items'
  const cartUrl = 'https://63384660937ea77bfdbd5dae.mockapi.io/cart'
  const favoritesUrl = 'https://63384660937ea77bfdbd5dae.mockapi.io/favorites'

  React.useEffect(() => {

    /*
      fetch(sneakersUrl)
        .then((res) => {
          return res.json()
        }).then((json) => {
          setItems(json)
        })
    */

      axios.get(sneakersUrl)
        .then((res) => {
          setItems(res.data)
        })

      axios.get(cartUrl)
      .then((res) => {
        setCartItems(res.data)
      })

      axios.get(favoritesUrl)
      .then((res) => {
        setFavorites(res.data)
      })
  }, [])

  const onAddToCard = (obj) => {
    axios.post(cartUrl, obj)
    setCartItems((prev) => [...prev, obj])
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


  return (
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
            onClickFovarite={(obj) => onAddToFavorite(obj)}
            onClickPlus={(obj) => onAddToCard(obj)}
            cardItems={items}
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
  )
}

export default App
