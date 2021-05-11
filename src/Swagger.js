import React from 'react'
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import { config } from './Api_config'

export default class Swagger extends React.Component{
    render(){
        return(
           
          <SwaggerUI spec ={config} />
            
        )
    }

}