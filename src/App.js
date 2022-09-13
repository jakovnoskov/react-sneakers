


function App() {
  return (
    <div className="wrapper clear">

      <header>
        <div className="headerLeft">
          <img width="40" height="40" src="/img/logo.svg"/>

          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кросовок</p>
          </div>
        </div>

        <ul className="headerRight">
            <li className="cartBox">
              <img width="18" height="18" src="/img/cart.svg"/>
              <span>1205 руб.</span>
            </li>
            <li>
              <img width="20" height="20" src="/img/user.svg"/>
            </li>
        </ul>

      </header>

      <div className="content">
        <h1 className="title-content">Все кроссовки</h1>

            <div className="productWrapper">

                    <div className="card">
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

                    <div className="card">
                      <img width={133} height={112} src="/img/sneakers/2.jpeg"/>
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

                    <div className="card">
                      <img width={133} height={112} src="/img/sneakers/3.jpeg"/>
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

                    <div className="card">
                      <img width={133} height={112} src="/img/sneakers/4.jpeg"/>
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

            </div>                   


      </div>

    </div>
  );
}

export default App;
