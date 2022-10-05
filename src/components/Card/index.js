import React from 'react'
import styles from './Card.module.scss'
import ContentLoader from 'react-content-loader'
import AppContext from '../../context'

function Card({
    id, 
    productId,
    title, 
    imageUrl, 
    price, 
    onFovarite, 
    onPlus, 
    favorited = false, 
    loading = false,
    simpleCard = false,
}) {
    
    const {isItemAdded} = React.useContext(AppContext)
    const[isFavorite, setIsFavorite] = React.useState(favorited)
    const cardObj = {id, productId, title, imageUrl, price}

    const onClickPlus = () => {
        onPlus(cardObj)
    }

    const onClickFovarite = () => {
        onFovarite(cardObj)
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={styles.card}>
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={155}
                    height={250}
                    viewBox="0 0 155 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                    <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                    <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                    <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                    <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>
                ) : (
                    <>
            <div className={styles.favorite} onClick={onClickFovarite}>  
                {!simpleCard && 
                    <img 
                        width="32" 
                        height="32" 
                        src={ 
                            isFavorite ? 
                            "img/liked.svg" : 
                            "img/unliked.svg" 
                        }
                        alt="Unliked"
                    />
                }
            </div>
            <img width={133} height={112} src={imageUrl}/>
            <h5>{title}</h5>
            <div className={styles.cardBottom}>
            <div className={styles.cardInfo}>
                <span>Цена</span>
                <b>{price} ₽</b>
            </div>
                {!simpleCard && 
                    <img 
                        className={styles.plus} 
                        onClick={onClickPlus} 
                        src={
                            isItemAdded(productId) ? 
                            "img/btn-checked.svg" : 
                            "img/btn-plus.svg" 
                        }
                    />
                }
            </div>
            </>
        )}
        </div>
    )
}

export default Card
