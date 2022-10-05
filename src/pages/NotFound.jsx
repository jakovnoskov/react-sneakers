import React from 'react'
import Info from '../components/Info'


function NotFound() {

    return (
        <div className="content">
        <div className="page-space">
            <Info 
            image={"img/404.jpg"}
            title={"Страница не найдена"}
            description={
                "Страница либо удалена, либо её тут и не было - проверьте адрес."
            }
            />
        </div>                   
        </div>
        )
    }
    
export default NotFound