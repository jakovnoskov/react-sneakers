

import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr = [
  {id:1, title:'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl:'/img/sneakers/1.jpeg'},
  {id:2, title:'Мужские Кроссовки Nike Air Max 270', price: 12999, imageUrl:'/img/sneakers/2.jpeg'},
  {id:3, title:'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl:'/img/sneakers/3.jpeg'},
  {id:4, title:'Кроссовки Puma X Aka Boku Future Rider', price: 12999, imageUrl:'/img/sneakers/4.jpeg'},
  {id:5, title:'Мужские Кроссовки Under Armour Curry 8', price: 12999, imageUrl:'/img/sneakers/5.jpeg'},
  {id:6, title:'Мужские Кроссовки Nike Kyrie 7', price: 12999, imageUrl:'/img/sneakers/6.jpeg'},
  {id:7, title:'Мужские Кроссовки Jordan Air Jordan 11', price: 12999, imageUrl:'/img/sneakers/7.jpeg'},
  {id:8, title:'Мужские Кроссовки Nike LeBron XVIII', price: 12999, imageUrl:'/img/sneakers/8.jpeg'},
  {id:9, title:'Мужские Кроссовки Nike Lebron XVIII Low', price: 12999, imageUrl:'/img/sneakers/9.jpeg'},
  {id:10, title:'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl:'/img/sneakers/10.jpeg'},
  {id:11, title:'Кроссовки Puma X Aka Boku Future Rider', price: 12999, imageUrl:'/img/sneakers/11.jpeg'},
  {id:12, title:'Мужские Кроссовки Nike Kyrie Flytrap IV', price: 12999, imageUrl:'/img/sneakers/12.jpeg'}
]

function App() {
  return (
    <div className="wrapper clear">

      <Drawer />
      <Header />

      <div className="content">

        <div className="content-info">
          <h1 className="title-content">Все кроссовки</h1>
          <div className="searchBlock">
            <img src="img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>

        <div className="productWrapper">
        {arr.map((obj) => (
           <Card 
            key={obj.id}
            title={obj.title} 
            price={obj.price} 
            imageUrl={obj.imageUrl} 
          />
        ))}
        </div>                   
      </div>
    </div>
  )
}

export default App
