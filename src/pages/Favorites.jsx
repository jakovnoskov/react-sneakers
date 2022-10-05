import React from 'react'
import Card from '../components/Card'
import AppContext from '../context'
//import styles from './Favorites.module.scss'


function Favorites({ onClickFovarite, onClickPlus }) {

    const {favorites} = React.useContext(AppContext)

    const [searchValue, setSearchValue] = React.useState('')

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
      }

    return (
    <>
        <div className="content">
            <div className="content-info">
            <h1 className="title-content">
                {
                searchValue ? 
                `Поиск по запросу: "${searchValue}"` :
                'Мои закладки'
                }
            </h1>
            <div className="searchBlock">
                <img 
                src="img/search.svg" 
                alt="Search"
                />
                {searchValue && 
                <img 
                    onClick={() => setSearchValue('')}
                    className="removeBtn" 
                    width="32" 
                    height="32" 
                    src="img/btn-remove.svg" 
                    alt="clear"
                />
                }
                <input 
                onChange={onChangeSearchInput} 
                placeholder="Поиск..."
                value={searchValue}
                />
            </div>
            </div>

            <div className="productWrapper">
            {favorites.map((item, index) => (
                <Card 
                    key={index}
                    onFovarite={(obj) => onClickFovarite(obj)}
                    onPlus={(obj) => onClickPlus(obj)}
                    favorited={true}
                    { ...item}
                />
            ))}
            </div>                   
        </div>
    </>
    )
}

export default Favorites