
import React from 'react'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

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
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    fetch('https://63384660937ea77bfdbd5dae.mockapi.io/items')
      .then((res) => {
        
        return res.json()
      }).then((json) => {
        console.log(json)
        setItems(json)
      })
  }, [])

  const onAddToCard = (obj) => {
    // console.log(obj)
    // console.log(cartItems)

    
      for (let num of cartItems) {
        console.log(num.cardId)
        console.log(obj.cardId)
        if(num.cardId == obj.cardId) return
      }
    
      setCartItems([...cartItems,obj])
    
  }

  return (
    <div className="wrapper clear">

      {
        cartOpened && 
        <Drawer 
          onClose={() => setCartOpened(false)}
          items={cartItems}
        /> 
      }
      <Header
       onClickCart={() => setCartOpened(true)}
      />

      <div className="content">

        <div className="content-info">
          <h1 className="title-content">Все кроссовки</h1>
          <div className="searchBlock">
            <img src="img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>

        <div className="productWrapper">
          {items.map((item) => (
            <Card 
              key={item.id}
              cardId={item.id}
              title={item.title} 
              price={item.price} 
              imageUrl={item.imageUrl} 
              onFovarite={() => console.log('Добавили в закладки')}
              onPlus={(obj) => onAddToCard(obj)}
            />
          ))}
        </div>                   
      </div>
    </div>
  )
}

export default App
