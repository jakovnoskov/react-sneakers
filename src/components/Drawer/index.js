import { useRef, useState, useContext, useEffect } from 'react'
import axios from 'axios'

import GlobalLoader from '../GlobalLoader'
import AppContext from '../../context'
import Info from '../Info'
import { useCart } from '../../hooks/useCart'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import { getCurrentDate } from '../../utils/getCurrentDate'

import styles from './Drawer.module.scss'

const cartUrl = 'https://63384660937ea77bfdbd5dae.mockapi.io/cart'
const ordersUrl = 'https://63384660937ea77bfdbd5dae.mockapi.io/orders'
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default function Drawer() {
  const { cartItems, setCartItems, totalPrice } = useCart()
  const [orderId, setOrderId] = useState(null)
  const [isOrderComplite, setIsOrderComplite] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  const dawerRef = useRef(null)
  useOnClickOutside(dawerRef, () => setCartOpened(false))
  const {
    setGlobalLoading,
    cartLoading,
    cartOpened,
    setCartOpened,
    onRemoveItem
  } = useContext(AppContext)

  const onClickOrder = async () => {
    try {
      setisLoading(true)
      setGlobalLoading(true)
      const { data } = await axios.post(ordersUrl, {
        totalPrice: totalPrice,
        date: getCurrentDate('.'),
        items: cartItems
      })

      setOrderId(data.id)

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i]
        await axios.delete(`${cartUrl}/${item.id}`)
        await delay(200)
      }
    } catch (error) {
      console.log(error)
      alert('Ошибка при создании заказа :(')
    }
    setCartItems([])
    setIsOrderComplite(true)
    setisLoading(false)
    setGlobalLoading(false)
    await delay(10000)
    setIsOrderComplite(false)
  }

  useEffect(() => {
    if (!cartOpened) setIsOrderComplite(false)
  }, [cartOpened])

  // useEffect(() => {
  //   useOnClickOutside(dawerRef, () => setCartOpened(false))
  // }, [cartOpened])

  return (
    <div
      className={`${styles.overlay} ${cartOpened ? styles.overlayVisible : ''}`}>
      <div
        ref={dawerRef}
        className={styles.drawer}
      >
        <h2 className={styles.titleCart}>
          Корзина
          <img
            onClick={() => setCartOpened(false)}
            className={styles.removeBtn}
            width="32"
            height="32"
            src="img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        {cartLoading && <GlobalLoader />}

        {cartItems.length > 0 ? (
          <>
            <div className={styles.items}>
              {cartItems.map((obj, index) => (
                <div key={index} className={styles.cartItem}>
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className={styles.cartImg} >
                  </div>

                  <div className={styles.cartItemText}>
                    <p>{obj.title}</p>
                    {/*
                            <p>id: {obj.id}</p>
                            <p>productId: {obj.productId}</p>
*/}
                    <b>{obj.price} руб.</b>
                  </div>

                  <img
                    onClick={() => onRemoveItem(obj)}
                    className={styles.removeBtn}
                    width="32"
                    height="32"
                    src="img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}

            </div>

            <div className={styles.cartTotalBlock}>
              <ul className={styles.cartTotalPriceList}>
                <li className={styles.cartTotalPriceListItem}>
                  <span>Итого:</span>
                  <div className={styles.bbsLine}></div>
                  <b>{totalPrice} руб. </b>
                </li>
                <li className={styles.cartTotalPriceListItem}>
                  <span>Налог 5%: </span>
                  <div className={styles.bbsLine}></div>
                  <b>{Math.round((totalPrice / 100) * 5)} руб. </b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className={styles.greenButton}>
                Оформить заказ
                <img
                  className={styles.arrowOrder}
                  width="14"
                  height="12"
                  src="img/arrow.svg"
                  alt="Arrow"
                />
              </button>
            </div>
          </>
        ) : (
          isOrderComplite ?
            <Info
              image={"img/complete-order.jpg"}
              title={"Заказ оформлен!"}
              description={`Ваш заказ #${orderId} скоро будет передан курьерской доставке`}
            />
            :
            <Info
              image={"img/empty-cart.jpg"}
              title={"Корзина пустая"}
              description={"Добавьте хотя бы одну пару кросовок что-бы сделать заказ"}
            />
        )}
      </div>
    </div>
  )
}