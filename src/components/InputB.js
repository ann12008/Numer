import React from 'react'
import {Row,Col,Input} from 'antd'
export default class InputB extends React.Component{

    ShowInput(){
        let arrCol = []
        for(let i = 0 ; i < this.props.n ; i++){
           
            for(let j = 0 ;  j < 1 ; j++){
                arrCol.push(<Row className = 'colInput'>  <Input style = {{width : '60px'}}  name = {'b'+' '+i.toString()} placeholder = '' value = {this.props.value[i]}  onChange = {this.props.onChange} autoComplete = 'off'/>  </Row>)
                
            }
           
            
            
        } 
        
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