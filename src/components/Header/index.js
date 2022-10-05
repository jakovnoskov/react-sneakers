import React from 'react'
import styles from './Header.module.scss'
import {Link} from 'react-router-dom'
import {useCart} from '../../hooks/useCart'

function Header(props) {
    const { totalPrice } = useCart()

    return (
    <header>
    <Link to="/">
        <div className={styles.headerLeft}>
        
            <img 
                width="40" 
                height="40" 
                src="img/logo.png"
            />

            <div className={styles.headerInfo}>
                <h3>React Sneakers</h3>
                <p>Магазин лучших кросовок</p>
            </div>
        </div>
    </Link>

    <ul className={styles.headerRight}>
        <li 
        onClick={props.onClickCart}
        className={styles.cartBox}>
            <img 
                width="18" 
                height="18" 
                src="img/cart.svg"
                alt="Корзина"
            />
        <span>{totalPrice} ₽</span>
        </li>
        <li className={styles.favoritesBox}>
            <Link to="favorites">
                <img 
                    width="18" 
                    height="18" 
                    src="img/heart.svg"
                    alt="Закладки"
                />
            </Link>
        </li>
        <li className={styles.userBox}>
            <Link to="/orders">
                <img 
                    width="18" 
                    height="18"  
                    src="img/user.svg"
                    alt="Пользовотель"
                />
            </Link>
        </li>
    </ul>

    </header>
    )
}

export default Header