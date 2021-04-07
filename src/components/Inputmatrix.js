import React from 'react'
import {Row,Col,Input} from 'antd'
export default class Inputmatrix extends React.Component{

    
    showInput(){
        let arrRow = []
        for(let i = 0 ; i < this.props.n ; i++){
            let arrCol = []
            for(let j = 0 ;  j < this.props.n ; j++){
                arrCol.push(<Col className = 'colInput'>  <Input style = {{width : '60px'}}  name = {i.toString()+' '+j.toString()} placeholder = '' onChange = {this.props.onChange} />  </Col>)
                
            }
            arrRow.push(<Row className = 'rowInput'>{arrCol}</Row>)
            
            
        } 
        return arrRow
    }

    render() {
        return (
            <div>
                
                
                   {this.showInput()}
                
            </div>
        )
    }
}
