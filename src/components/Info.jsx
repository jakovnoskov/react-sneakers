import React from 'react'
import AppContext from '../context'

const Info = ({ image, title, description }) => {
    const { setCartOpened } = React.useContext(AppContext)

    return (
        <div className="cartEmpty">
            <img 
                className="cartEmptyImg" 
                width="120" 
                src={image} 
                alt="cartInfoLogo"
            />
            <h2>{ title }</h2>
            <p className="cartEmptyTitle">{ description }</p>
            <button 
                onClick={() => setCartOpened(false)} 
                className="greenButton"
            >
            <img 
                className="arrowCartEmpty"
                src="/img/arrow.svg" 
                alt="Arrow"
            />
            Вернуться назад
            </button>
        </div>
  )
}

export default Info
