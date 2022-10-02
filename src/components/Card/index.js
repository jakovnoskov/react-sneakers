import React from 'react'
import styles from './Card.module.scss'


function Card({cardId, title, imageUrl, price, onFovarite, onPlus}) {
    
    const[isAdded, setIsAdded] = React.useState(false)
    const onClickPlus = () => {
        onPlus({cardId, title, imageUrl, price})
        setIsAdded(!isAdded)
    }

    React.useEffect(() => {
        //console.log('Переменная изменилась')
    }, [isAdded] )

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFovarite}>  
                <img 
                    width="32" 
                    height="32" 
                    src="/img/heart-unliked.svg" 
                    alt="Unliked"
                />
            </div>
            <img width={133} height={112} src={imageUrl}/>
            <h5>{title}</h5>
            <div className={styles.cardBottom}>
            <div className={styles.cardInfo}>
                <span>Цена</span>
                <b>{price}</b>
            </div>
                <img 
                    className={styles.plus} 
                    onClick={onClickPlus} 
                    src={isAdded ? "/img/btn-cheked.svg" :"/img/btn-plus.svg" }
                />
            </div>
        </div>
    )
}

export default Card
