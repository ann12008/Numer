import React from 'react'
import {Row,Col,Input} from 'antd'
export default class InputXY extends React.Component{

    ShowInput(){
        let arrRow = []
        for(let i = 0 ; i < this.props.n ; i++){
            let arrCol = []
            for(let j = 0 ;  j < 2 ; j++){
                arrCol.push(<Col className = 'colInput'>  <Input style = {{width : '100px'}}  name = {i.toString()+' '+j.toString()} placeholder = '' onChange = {this.props.onChange} autoComplete = 'off'/>  </Col>)
                
            }
            arrRow.push(<Row className = 'rowInput'>{arrCol}</Row>)
            
            
        } 
        return arrRow
    }
    
    render(){
        return(
            <div>
                {this.ShowInput()}
            </div>
        )
    }
}