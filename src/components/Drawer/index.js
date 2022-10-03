import React from 'react'
import styles from './Drawer.module.scss'

function Drawer({ onClose, onRemove, items = [] }) {


    React.useEffect(() => {
        console.log('Drawer items')
        console.log(items)

    }, [items])

    return (
    <div className={styles.overlay}>
        <div className={styles.drawer}>
        <h2 className={styles.titleCart}>
        Корзина
            <img 
                onClick={onClose}
                className={styles.removeBtn} 
                width="32" 
                height="32" 
                src="/img/btn-remove.svg" 
                alt="Close"
            />
        </h2>

        {items.length > 0 ? (

            <>
            <div className={styles.items}>
                    
                {items.map((obj, index) => (
                    <div key={index} className={styles.cartItem}>
                        <div 
                            style={{backgroundImage:`url(${obj.imageUrl})`}} 
                            className={styles.cartImg} >
                        </div>

                        <div className={styles.cartItemText}>
                            <p>{obj.title}</p>
                            <b>{obj.price} руб.</b>
                        </div>

                        <img 
                            onClick={() => onRemove(obj)}
                            className={styles.removeBtn} 
                            width="32" 
                            height="32" 
                            src="/img/btn-remove.svg" 
                            alt="Remove"
                        />
                    </div>
                ))}
                
            </div>  

            <div className={styles.cartTotalBlock}>
            <ul>
            <li>
                <span>Итого:</span>
                <div className={styles.bbsLine}></div>
                <b>21 498 руб. </b>
            </li>
            <li>
                <span>Налог 5%: </span>
                <div className={styles.bbsLine}></div>
                <b>1074 руб. </b>
            </li>
            </ul>
            <button className={styles.greenButton}>
            Оформить заказ
                <img 
                    className={styles.arrowOrder} 
                    width="14" 
                    height="12" 
                    src="/img/arrow.svg" 
                    alt="Arrow"
                />
            </button>
            </div>
            </>            

        ) : (

            <div className={styles.cartEmpty}>
            <img 
                className={styles.cartEmptyImg} 
                width="120" 
                height="120" 
                src="/img/empty-cart.jpg" 
                alt="Arrow"
            />
            <h2>Корзина пустая</h2>
            <p className={styles.cartEmptyTitle}>Добавьте хотя бы одну пару кросовок что-бы сделать заказ</p>
            <button onClick={onClose} className={styles.greenButton}>
            <img 
                className={styles.arrowCartEmpty} 
                src="/img/arrow.svg" 
                alt="Arrow"
            />
            Вернуться назад
            </button>
            </div>

    )}





        </div>
    </div>
    )
}

export default Drawer