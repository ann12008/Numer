import React from 'react'
import {Row,Col,Input} from 'antd'
export default class InputB extends React.Component{

    ShowInput(){
        let arrCol = []
        for(let i = 0 ; i < this.props.n ; i++){
           
            for(let j = 0 ;  j < 1 ; j++){
                arrCol.push(<Row className = 'colInput'>  <Input style = {{width : '60px'}}  name = {i.toString()} placeholder = '' onChange = {this.props.onChange} />  </Row>)
                
            }
           
            
            
        } 
        console.log(arrCol)
        return arrCol
    }
    render(){
        return(
            <div>
                {this.ShowInput()}
            </div>
        )
    }
}