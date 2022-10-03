import React from 'react'
import Card from '../../components/Card'

//import styles from './Home.module.scss'


function Home({
    items, 
    onClickFovarite, 
    onClickPlus, 
    isLoading
}) {

    const [searchValue, setSearchValue] = React.useState('')

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
      }


    const renderItems = () => {

        const filtredItems = items.filter(item => 
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        
        return ( isLoading ? [...Array(12)] : filtredItems ).map((item, index) => (
                <Card 
                    key={index}
                    onFovarite={(obj) => onClickFovarite(obj)}
                    onPlus={(obj) => onClickPlus(obj)}
                    loading={isLoading}
                    { ...item}
                />
            ))
    }
    


    return (
    <>
        <div className="content">
            <div className="content-info">
            <h1 className="title-content">
                {
                searchValue ? 
                `Поиск по запросу: "${searchValue}"` :
                'Все кроссовки'
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
                    src="/img/btn-remove.svg" 
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
                {renderItems()}
            </div>                   
        </div>
    </>
    )
}

export default Home