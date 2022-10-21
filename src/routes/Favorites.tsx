import React from 'react'
import { Card } from '../components/Card'
import AppContext from '../context'
import { Info } from '../components/Info'

export default function Favorites() {

  const { favorites, isLoadingFavorite } = React.useContext(AppContext)

  return (
    <div className="content">
      {!isLoadingFavorite && favorites.length <= 0 ?
        (<div className="page-space">
          <Info
            emoji={'🥺'}
            title={"Закладок нет :("}
            showModePage={true}
            description={
              "Вы ничего не добавляли в закладки"
            }
          />
        </div>)
        :
        (<>
          <div className="content-info">
            <h1 className="title-content">Мои закладки</h1>
          </div>
          <div className="productWrapper">
            {favorites.map((item, index) => (
              <Card
                key={index}
                //onFovarite={(obj) => onClickFovarite(obj)}
                //onPlus={(obj) => onClickPlus(obj)}
                favorited={true}
                {...item}
              />
            ))}
          </div>
        </>)
      }
    </div>
  )
}