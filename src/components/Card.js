
function Card() {
    return (
        <div className="card">

            <div className="favorite">  
            <img width="32" height="32" src="/img/heart-unliked.svg" alt="Unliked"/>
            </div>

        <img width={133} height={112} src="/img/sneakers/1.jpeg"/>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
            <div className="cardInfo">
                <span>Цена</span>
                <b>12 999 руб.</b>
            </div>
            <button>
                <img width="11" height="11" src="/img/plus.svg"/>
            </button>
            </div>

        </div>
    );
}

export default Card;
