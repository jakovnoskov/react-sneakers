import React from 'react'
import { Info } from '../components/Info'
import { useRouteError } from 'react-router-dom'

type Ierror = {
  statusText: string
  message: string
}
type errorType = ReturnType<typeof useRouteError>

export default function ErrorPage() {
  const error: errorType = useRouteError()
  let errorMessage = error as errorType as Ierror
  return (
    <div className="content">
      <div className="page-space">
        <Info
          emoji={'😔'}
          title={"Страница не найдена"}
          showModePage={true}
          description={errorMessage.statusText || errorMessage.message}
        />
      </div>
    </div>
  )
}