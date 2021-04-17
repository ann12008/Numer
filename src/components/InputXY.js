import React from 'react'
import {Row,Col,Input} from 'antd'
export default class InputXY extends React.Component{

    ShowInput(){
        let arrRow = []
        for(let i = 0 ; i < this.props.n ; i++){
            let arrCol = []
            for(let j = 0 ;  j < 2 ; j++){
                if(j == 0){
                    arrCol.push(<Col className = 'colInput'>  <Input style = {{width : '100px'}} value = {this.props.value[i][j]} name = {i.toString()+' '+j.toString()} placeholder = 'X' onChange = {this.props.onChange} autoComplete = 'off'/>  </Col>)
                }
                else if(j == 1){
                    arrCol.push(<Col className = 'colInput'>  <Input style = {{width : '100px'}} value = {this.props.value[i][j]} name = {i.toString()+' '+j.toString()} placeholder = 'f(X)' onChange = {this.props.onChange} autoComplete = 'off'/>  </Col>)
                }
               
                
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