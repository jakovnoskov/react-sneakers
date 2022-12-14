import React from 'react'
import styles from './Card.module.scss'
import ContentLoader from 'react-content-loader'
import AppContext, { SneakersItem } from '../../context'
import GlobalLoader from '../GlobalLoader'
import { Link } from 'react-router-dom'

type CardProps = {
  id: number,
  productId: number,
  title: string,
  imageUrl: string,
  price: number,
  favorited?: boolean,
  loading?: boolean,
  simpleCard?: boolean,
}

export const Card: React.FC<CardProps> = ({
  id,
  productId,
  title,
  imageUrl,
  price,
  favorited = false,
  loading = false,
  simpleCard = false,
}) => {

  const {
    isItemAdded,
    isItemFavorited,
    onAddToFavorite,
    onAddToCard,
    isLoadingFavorite,
    cartLoading,
    showCase
  } = React.useContext(AppContext)
  const [isFavorite, setIsFavorite] = React.useState(favorited)
  const [loadFavorite, setLoadFavorite] = React.useState(false)
  const [loadAdd, setLoadAdd] = React.useState(false)
  const obj: SneakersItem = { id, parentId: id, productId, title, imageUrl, price }

  const onClickPlus = () => {
    setLoadAdd(true)
    if (onAddToCard) onAddToCard(obj)
  }

  const onClickFovarite = () => {
    setLoadFavorite(true)
    if (onAddToFavorite) onAddToFavorite(obj)
    setIsFavorite(!isFavorite)
  }

  React.useEffect(() => {
    if (!isLoadingFavorite) setLoadFavorite(false)
    if (!cartLoading) setLoadAdd(false)
  }, [isLoadingFavorite, cartLoading])

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
          <Link to={`/catalog/:${productId}`} >
            <div className={styles.favorite}>
              <div className={styles.favoriteBox}>
                {loadFavorite && <GlobalLoader smalMode={true} />}
                {!simpleCard &&
                  <img
                    width="32"
                    height="32"
                    //onClick={onClickFovarite}
                    src={
                      isItemFavorited && isItemFavorited(productId) ?
                        "img/liked.svg" :
                        "img/unliked.svg"
                    }
                    alt="Unliked"
                  />
                }
              </div>
            </div>
            <img
              className={styles.orderImg}
              width={133}
              height={112}
              src={imageUrl} />
            <h5>{title}</h5>
            {/*
            <h5>id: {id}</h5>
            <h5>productId: {productId}</h5>
*/}
            <div className={styles.cardBottom}>
              <div className={styles.cardInfo}>
                <span>????????</span>
                <b>{price} ???</b>
              </div>

              {/* <div className={styles.addBox}> 
                {loadAdd && <GlobalLoader smalMode={true}/>}
                {!simpleCard && 
                    <img 
                        className={styles.plus} 
                        onClick={onClickPlus} 
                        src={
                            isItemAdded(productId) ? 
                            "img/btn-checked.svg" : 
                            "img/btn-plus.svg" 
                        }
                        alt="Add"
                    />
                }
                </div>*/}
            </div>
          </Link>
        </>
      )}
    </div>
  )
}
