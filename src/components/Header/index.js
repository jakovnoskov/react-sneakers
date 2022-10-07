import React from 'react'
import styles from './Header.module.scss'
import {Link} from 'react-router-dom'
import AppContext from '../../context'
//import {useCart} from '../../hooks/useCart'
import MenuCounter from '../MenuCounter'


function Header() {
    //const { totalPrice } = useCart()
    const { showCase, setCartOpened, setMobileMenuOpened, favorites, cartItems } = React.useContext(AppContext)

    return (
    <header>
    <Link to={`${showCase}`}>
        <div className={styles.headerLeft}>
            <img 
                className={styles.headerLogo}
                width="40" 
                height="40" 
                src="img/logo.png"
            />
            <div className={styles.headerInfo}>
                <h3>React Sneakers</h3>
                <p>Магазин лучших кроссовок</p>
            </div>
        </div>
    </Link>

    <ul className={styles.headerRight}>
        <li 
        onClick={() => setCartOpened(true)}
        className={styles.cartBox}>
            <MenuCounter count={cartItems.length}/>
            <img 
                width="18" 
                height="18" 
                src="img/cart.svg"
                alt="Корзина"
            />
        {/*<span>{totalPrice} ₽</span>*/}
        </li>
        <li className={styles.favoritesBox}>
            <Link to={`${showCase}favorites`}>
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