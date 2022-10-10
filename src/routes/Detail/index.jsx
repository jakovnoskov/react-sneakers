import React from 'react'
import { useParams,Link } from 'react-router-dom'
import styles from './Detail.module.scss'
import AppContext from '../../context'
import GlobalLoader from '../../components/GlobalLoader'
import {getCurrentDate} from '../../utils/getCurrentDate'

export default function Detail() {
const {
isItemAdded,
isItemFavorited,        
onAddToFavorite,
onAddToCard,
setCartOpened,
isLoading,
sneakers,
isLoadingFavorite,
showCase
} = React.useContext(AppContext)

const[isFavorite, setIsFavorite] = React.useState(false)
const [item, setItem] = React.useState({})
const [color, setColor] = React.useState({})

let params = useParams()
const idInUrl = Number(params.productId.replace(/[^\d\+]/g, ''))

React.useEffect(() => {
if (sneakers && sneakers.length > 0) setItem(sneakers.find(objF => Number(objF.productId) === idInUrl))
}, [sneakers])

const onClickFovarite = () => {
onAddToFavorite(item)
setIsFavorite(!isFavorite)
}

const onClickColor = (num) => setColor(num)

return (
<div className="content">
{isLoading ? <GlobalLoader /> : (
<>
  <div className={styles.detailProductContent}>
    <Link to={`${showCase}`}>
      <img 
      className={styles.backBtn} 
      width="35" 
      height="35" 
      src="img/btn-back.svg" 
      alt="Back"
      />
    </Link>
    <h1 className={styles.titleContent}>{item.title}</h1>
  </div> 
<div className={styles.detailPageWrapper}>
  <div className={styles.imgProductBox}>
    <img  width={133} src={item.imageUrl}/>
  </div>
<div className={styles.infoProductBox}>
<div className={styles.productPrice}>{item.price} ₽</div>
<div className={styles.colorTitle}>Цвет:</div>
<ul className={styles.colorBox}>
<li onClick={() => onClickColor(1)} className={`${color === 1 ? styles.activeColor : ''}`}/>
<li onClick={() => onClickColor(2)} className={`${color === 2 ? styles.activeColor : ''}`}/>
<li onClick={() => onClickColor(3)} className={`${color === 3 ? styles.activeColor : ''}`}/>
</ul>
<div className={styles.deliveryInfo}>Бесплатная доставка - <span>{getCurrentDate('.')}</span></div>    
<div className={styles.controlOrderBox}>
  <button 
    className="greenButton"
    onClick={() => { 
    isItemAdded(item.productId) ? 
    setCartOpened(true) : 
    onAddToCard(item)}}>
  { isItemAdded(item.productId) ?  'Товар в корзине' : 'Добавить в корзину'}
  {
    isItemAdded(item.productId) && 
    <img 
    className="arrowOrder" 
    width="14" 
    height="12" 
    src="img/arrow.svg" 
    alt="Arrow"
    />
    }
  </button>
<div className={styles.addBox}> 
  {isLoadingFavorite && <GlobalLoader smalMode={true}/>}
  <img 
  width="55" 
  height="55" 
  onClick={onClickFovarite}
  src={ 
  isItemFavorited(idInUrl) ? 
  "img/liked.svg" : 
  "img/unliked.svg" 
  }
  alt="Unliked"
  />
</div>
</div>  
</div>
</div>   
</>
)}
</div>
)
}