import React from 'react'
import { 
  useParams, 
  //useNavigate, 
  Link } from 'react-router-dom'
import ContentLoader from 'react-content-loader'
import styles from './Detail.module.scss'
import AppContext from '../../context'
import GlobalLoader from '../../components/GlobalLoader'
import {getCurrentDate} from '../../utils/getCurrentDate'

function Detail() {
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
    const [checkedColor1, setCheckedColor1] = React.useState(false);
    const [checkedColor2, setCheckedColor2] = React.useState(false);
    const [checkedColor3, setCheckedColor3] = React.useState(false);

    let params = useParams()
    //const navigate = useNavigate();
    const idInUrl = Number(params.productId.replace(/[^\d\+]/g, ''))

    React.useEffect(() => {
       if (sneakers && sneakers.length > 0) setItem(sneakers.find(objF => Number(objF.productId) === idInUrl))
    }, [sneakers])

    const onClickFovarite = () => {
        onAddToFavorite(item)
        setIsFavorite(!isFavorite)
    }

    const changeColor = (num) => {

        setCheckedColor1(false)
        setCheckedColor2(false)
        setCheckedColor3(false)

        switch (num) {
                case 1: setCheckedColor1(true) 
                break;
                case 2: setCheckedColor2(true)
                break;
                case 3: setCheckedColor3(true)   
                break;
            default:
                break;
        }
    }

    return (
        <div className="content">
            {isLoading ? <GlobalLoader /> : (
                    <>
                    <div className={styles.detailProductContent}>
                        <Link to={`${showCase}`}>
                            <img 
                                //onClick={() => navigate(-1)}
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
                            <img 
                                width={133} 
                                src={item.imageUrl}
                            />
                        </div>
                        <div className={styles.infoProductBox}>
                            <div className={styles.productPrice}>{item.price} ₽</div>
                            <div className={styles.colorTitle}>Цвет:</div>
                            <div className={styles.colorBox}>
                                <div onClick={() => changeColor(1)} className={`${styles.colorBoxItem} ${checkedColor1 ? styles.activeColor : ''}`}></div>
                                <div onClick={() => changeColor(2)} className={`${styles.colorBoxItem} ${checkedColor2 ? styles.activeColor : ''}`}></div>
                                <div onClick={() => changeColor(3)} className={`${styles.colorBoxItem} ${checkedColor3 ? styles.activeColor : ''}`}></div>
                            </div>
                            <div className={styles.deliveryInfo}>Бесплатная доставка - <span>{getCurrentDate('.')}</span></div>    

                            <div className={styles.controlOrderBox}>
                                <button 
                                    className="greenButton"
                                    onClick={() => { 
                                        isItemAdded(item.productId) ? 
                                        setCartOpened(true) : 
                                        onAddToCard(item)} 
                                    }
                                    //disabled={isItemAdded(item.productId)}
                                >
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
    
export default Detail