import React from 'react'
import Card from '../components/Card'
import axios from 'axios'
import Info from '../components/Info'

export default function Orders() {
    const ordersUrl = 'https://63384660937ea77bfdbd5dae.mockapi.io/orders'
    const [orders, setOrders] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {( async () => {
    try {
        const {data} = await axios.get(ordersUrl)
        setOrders(data.reverse())
        setIsLoading(false)
    } catch (error) {
        console.log('Ошибка при запросе заказов')
        console.log(error)
    } })()}, [])

    return (
      <div className="content">
          { !isLoading && orders.length <= 0 ? (
          <div className="page-space">
            <Info 
              emoji={'😢'}
              title={"У вас нет заказов"}
              showModePage={true}
              description={
              "Оформите хотя бы один заказ."
              }
            />
          </div>  
          ) : (
            <div className="content-order">
              <h1 className="title-content">Мои заказы</h1>
              <div className="productWrapper">
              {( !isLoading ?
              orders.map((item, index) => (
              <div key={index} className="orderProductWrap">
                <h2 className="orderTitleProduct">
                Закааз # {item.id}
                <span> 
                  - от {item.date} на сумму 
                  {item.totalPrice} ₽
                </span>
                </h2>
                <div className="productWrapper">
                  { item.items.map((item, index) => (
                    <Card 
                      key={index}
                      simpleCard={true}
                      loading={isLoading}
                      { ...item}
                    />
                  ))}
                </div>
              </div>
              )) :
              [...Array(12)].map((item, index) => (
                <Card  
                  key={index} 
                  simpleCard={true} 
                  loading={isLoading} 
                  { ...item} 
                /> )))}
              </div> 
            </div> 
          )}
    </div>
  )
}