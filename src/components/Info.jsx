import React from 'react'
import AppContext from '../context'
import {Link} from 'react-router-dom'

export default function Info  ({ 
    emoji = '',
    showModePage = false,
    image, 
    title, 
    description,
    showButton = true
}){
    const { setCartOpened, showCase } = React.useContext(AppContext)

//console.log(showCase)

    return (
        <div className="cartEmpty">
            {emoji ? <div className="emojiBox">{emoji}</div> :
                <img 
                className="cartEmptyImg" 
                width="120" 
                src={image} 
                alt="cartInfoLogo"
            />}
            <h2>{ title }</h2>
            <p className="cartEmptyTitle">{ description }</p>
            { showButton && 
            <>
                {showModePage ? 
                    <Link to={`${showCase}`}>
                        <button className="greenButton">
                        <img 
                            className="arrowCartEmpty"
                            src="img/arrow.svg" 
                            alt="Arrow"
                        />
                        Вернуться назад
                        </button>
                    </Link> :
                    <button onClick={() => setCartOpened(false)} className="greenButton">
                        <img 
                            className="arrowCartEmpty"
                            src="img/arrow.svg" 
                            alt="Arrow"
                        />
                        Вернуться назад
                    </button>
                }
            </>
            }
        </div>
  )
}
