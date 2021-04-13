import React from 'react'
import {Row,Col,Input} from 'antd'
export default class InputMultiple extends React.Component{

    ShowInput(){
        let arrRow = []
        for(let i = 0 ; i < this.props.n ; i++){
            let arrCol = []
            for(let j = 0 ;  j < 4 ; j++){
                if(j == 3 ){
                    arrCol.push(<Col className = 'colInput'>  <Input style = {{width : '100px'}}  name = {i.toString()+' '+j.toString()} placeholder = {'Y'+i.toString()} onChange = {this.props.onChange} autoComplete = 'off'/>  </Col>)
                    
                }
                else {
                    arrCol.push(<Col className = 'colInput'>  <Input style = {{width : '100px'}}  name = {i.toString()+' '+j.toString()} placeholder = {'X'+i.toString()+''+j.toString()} onChange = {this.props.onChange} autoComplete = 'off'/>  </Col>)
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