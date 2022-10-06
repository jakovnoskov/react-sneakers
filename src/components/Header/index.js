import React from 'react'
import styles from './Header.module.scss'
import {Link} from 'react-router-dom'
import AppContext from '../../context'
import {useCart} from '../../hooks/useCart'


function Header() {
    const { totalPrice } = useCart()
    const { showCase, setCartOpened, setMobileMenuOpened, favorites } = React.useContext(AppContext)

    return (
    <header>
    <Link to={`${showCase}`}>
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
        onClick={() => setCartOpened(true)}
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
            <Link to={`${showCase}favorites`}>
                { favorites.length>0 && 
                    <span className={styles.fvCounter}>
                        { favorites.length > 100 ? '+99' : favorites.length }
                    </span> }
                <img 
                    width="18" 
                    height="18" 
                    src="img/heart.svg"
                    alt="Закладки"
                />
            </Link>
        </li>
        <li className={styles.userBox}>
            <Link to={`${showCase}orders`}>
                <img 
                    width="18" 
                    height="18"  
                    src="img/user.svg"
                    alt="Пользовотель"
                />
            </Link>
        </li>
        <li 
            onClick={() => setMobileMenuOpened(true)}
            className={styles.mobileMenu}>
            <div className={styles.overlayButton}><span></span></div>
        </li>
    </ul>

    </header>
    )
}

export default Header