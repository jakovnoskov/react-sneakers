function Header() {
    return (
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

    );
}

export default Header;