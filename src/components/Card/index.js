import styles from './Card.module.scss';



function Card(props) {
    return (
        <div className={styles.card}>

            <div className={styles.favorite}>  
            <img width="32" height="32" src="/img/heart-unliked.svg" alt="Unliked"/>
            </div>

        <img width={133} height={112} src={props.imageUrl}/>
        <h5>{props.title}</h5>
            <div className={styles.cardBottom}>
            <div className={styles.cardInfo}>
                <span>Цена</span>
                <b>{props.price}</b>
            </div>
            <button>
                <img width="11" height="11" src="/img/plus.svg"/>
            </button>
            </div>

        </div>
    );
}

export default Card;
