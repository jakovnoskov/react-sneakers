

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {title:'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl:'/img/sneakers/1.jpeg'},
  {title:'Мужские Кроссовки Nike Air Max 270', price: 12999, imageUrl:'/img/sneakers/2.jpeg'},
  {title:'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl:'/img/sneakers/3.jpeg'},
  {title:'Кроссовки Puma X Aka Boku Future Rider', price: 12999, imageUrl:'/img/sneakers/4.jpeg'},
  {title:'Мужские Кроссовки Under Armour Curry 8', price: 12999, imageUrl:'/img/sneakers/5.jpeg'},
  {title:'Мужские Кроссовки Nike Kyrie 7', price: 12999, imageUrl:'/img/sneakers/6.jpeg'},
  {title:'Мужские Кроссовки Jordan Air Jordan 11', price: 12999, imageUrl:'/img/sneakers/7.jpeg'},
  {title:'Мужские Кроссовки Nike LeBron XVIII', price: 12999, imageUrl:'/img/sneakers/8.jpeg'},
  {title:'Мужские Кроссовки Nike Lebron XVIII Low', price: 12999, imageUrl:'/img/sneakers/9.jpeg'},
  {title:'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl:'/img/sneakers/10.jpeg'},
  {title:'Кроссовки Puma X Aka Boku Future Rider', price: 12999, imageUrl:'/img/sneakers/11.jpeg'},
  {title:'Мужские Кроссовки Nike Kyrie Flytrap IV', price: 12999, imageUrl:'/img/sneakers/12.jpeg'}
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
            title={obj.title} 
            price={obj.price} 
            imageUrl={obj.imageUrl} 
          />
        ))}
        </div>                   
      </div>
    </div>
  );
}

export default App;
