import React from 'react'
import styles from './MobileMenu.module.scss'
import {Link} from 'react-router-dom'
import AppContext from '../../context'
import {useCart} from '../../hooks/useCart'

function MobileMenu() {
    const { totalPrice } = useCart()
    const { 
        showCase, 
        mobileMenuOpened, 
        setCartOpened, 
        setMobileMenuOpened 
    } = React.useContext(AppContext)

    const menuValues = [
        {id:1, name:'Каталог', value:''},
        {id:2, name:`Корзина (${totalPrice} ₽)`, menuItemFunc: setCartOpened },
        {id:3, name:'Закладки', value:'favorites'},
        {id:4, name:'Личный кабинет', value:'orders'},
    ]

    return (
    <menu className={`${styles.mobileMenu} ${mobileMenuOpened ? styles.mobileMenuVisible : ''}`}>

        <h2 className={styles.titleCart}>
            Меню
            <img 
                onClick={() => setMobileMenuOpened(false)}
                className={styles.removeBtn} 
                width="32" 
                height="32" 
                src="img/btn-remove.svg" 
                alt="Close"
            />
        </h2>
        <ul className={styles.mobileMenuBox}>
            {menuValues.map((obj, index) => (
            (
                obj.menuItemFunc ? 
                <li 
                    key={index}
                    className={styles.mobileMenuItem}
                    onClick={() => { 
                        obj.menuItemFunc(true)
                        return setMobileMenuOpened(false)
                    }}
                >
                    {obj.name}
                </li>
                :
                <Link key={index} to={`${showCase}${obj.value}`} onClick={() => setMobileMenuOpened(false)}>
                    <li className={styles.mobileMenuItem}>{obj.name}</li>
                </Link>                           
            )
            ))}
        </ul>
    </menu>
    )
}

export default MobileMenu