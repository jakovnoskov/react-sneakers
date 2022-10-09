import React from 'react'
import Info from '../components/Info'
import {useRouteError} from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)
return (
    <div className="content">
    <div className="page-space">
        <Info 
            emoji={'😔'}
            title={"Страница не найдена"}
            showModePage={true}
            description={error.statusText || error.message}
        />
    </div>                   
    </div>
    )
}