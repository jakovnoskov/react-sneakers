

function Drawer() {
    return (
        <div className="overlay" style={{display:'none'}}>
            <div className="drawer">
                <h2 className="titleCart">
                Корзина
                <img className="removeBtn" width="32" height="32" src="/img/btn-remove.svg" alt="Remove"/>
                </h2>

                <div className="items">
                
                    <div className="cartItem">

                    <div style={{backgroundImage:'url(/img/sneakers/1.jpeg)'}} className="cartImg" ></div>

                    <div className="cartItemText">
                        <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <b>12 999 руб.</b>
                    </div>

                    <img className="removeBtn" width="32" height="32" src="/img/btn-remove.svg" alt="Remove"/>
                    </div>

                    <div className="cartItem">

                    <div style={{backgroundImage:'url(/img/sneakers/1.jpeg)'}} className="cartImg" ></div>

                    <div className="cartItemText">
                    <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <b>12 999 руб.</b>
                    </div>

                    <img className="removeBtn" width="32" height="32" src="/img/btn-remove.svg" alt="Remove"/>
                    </div> 
                    
                </div>   

            <div className="cartTotalBlock">
                <ul>
                <li>
                    <span>Итого:</span>
                    <div className="bbsLine"></div>
                    <b>21 498 руб. </b>
                </li>
                <li>
                    <span>Налог 5%: </span>
                    <div className="bbsLine"></div>
                    <b>1074 руб. </b>
                </li>
                </ul>
                <button className="greenButton">
                Оформить заказ
                <img className="arrowOrder" width="14" height="12" src="/img/arrow.svg" alt="Arrow"/>
                </button>
            </div>

            </div>
        </div>
    );
}

export default Drawer;