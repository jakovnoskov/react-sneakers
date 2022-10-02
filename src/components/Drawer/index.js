import React from 'react'
import styles from './Drawer.module.scss'

function Drawer({ onClose, items = [] }) {
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
                alt="Remove"
            />
        </h2>

        <div className={styles.items}>
        
            {items.map((obj) => (
                <div key={obj.id} className={styles.cartItem}>
                    <div 
                        style={{backgroundImage:`url(${obj.imageUrl})`}} 
                        className={styles.cartImg} >
                    </div>

                    <div className={styles.cartItemText}>
                        <p>{obj.title}</p>
                        <b>{obj.price}</b>
                    </div>

                    <img 
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
        <button className="greenButton">
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

        </div>
    </div>
    )
}

export default Drawer