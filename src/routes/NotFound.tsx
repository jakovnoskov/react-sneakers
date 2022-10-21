import React from 'react'
import { Info } from '../components/Info'

export default function NotFound() {
  return (
    <div className="content">
      <div className="page-space">
        <Info
          emoji={'😔'}
          title={"Страница не найдена"}
          showModePage={true}
          description={
            "Страница либо удалена, либо её тут и не было - проверьте адрес."
          }
        />
      </div>
    </div>
  )
}