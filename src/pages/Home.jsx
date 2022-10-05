import React from 'react'
import Card from '../components/Card'
import Info from '../components/Info'


function Home({
    items, 
    onClickFovarite, 
    onClickPlus, 
    isLoading
}) {

    const [searchValue, setSearchValue] = React.useState('')
    const [searchMode, setSearchMode] = React.useState(false)


    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value.slice(0, 18))
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


    React.useEffect(() => {
        const filtredItems = items.filter(item => 
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        )

        setSearchMode(searchValue.length > 0 && filtredItems.length == 0 ? true : false)
    }, [searchValue])


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

            
                { !searchMode ? <div className="productWrapper">{renderItems()}</div>  :
                    (
                        <div className="page-space">
                        <Info 
                            emoji={'🔎'}
                            title={"Ничего не найдено"}
                            showModePage={true}
                            showButton={false}
                            description={
                                `По вашему запросу ${searchValue} товаров не найдено`
                            }
                        />
                    </div> 
                    )
                }
                             
        </div>
    </>
    )
}

export default Home