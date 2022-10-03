import React from 'react'
import styles from './Card.module.scss'


function Card({id, title, imageUrl, price, onFovarite, onPlus, favorited = false}) {
    
    const[isAdded, setIsAdded] = React.useState(false)
    const[isFavorite, setIsFavorite] = React.useState(favorited)

    const onClickPlus = () => {
        onPlus({id, title, imageUrl, price})
        setIsAdded(!isAdded)
    }

    const onClickFovarite = () => {
        onFovarite({id, title, imageUrl, price})
        setIsFavorite(!isFavorite)
    }

    React.useEffect(() => {
        //console.log('Переменная изменилась')
    }, [isAdded] )

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFovarite}>  
                <img 
                    width="32" 
                    height="32" 
                    src={ isFavorite ? "/img/liked.svg" : "/img/unliked.svg" }
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
                    src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg" }
                />
            </div>
        </div>
    )
}

export default Card
