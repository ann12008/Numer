import React from 'react'
import { Row, Col } from 'antd'
import {Input , Button ,Table} from 'antd'
import './Bisection.css'
import {calOnepoint} from '../calculator'

class OnePoint extends React.Component {

    state = { equation : '' , x : '' , error : '' , status : null  , colum : [{title : 'Iteration', dataIndex : 'iteration'},{title : 'X', dataIndex : 'x'},{title : 'Error',dataIndex : 'error'}] ,data : []};
    
    onChangeEquation = e =>{
        this.setState({equation : e.target.value})
    }
    onChangeX = e =>{
        this.setState({x : e.target.value})
    }
    
    onChangeError = e =>{
        this.setState({error : e.target.value})
    }

    onClickCalculator = e =>{

        
        this.setState({data : calOnepoint(this.state.equation ,this.state.x ,this.state.error)})
    }

    render(){
        return(
            <div>
                 <Row>
                         <Col   span = {24}  style = {{textAlign : 'center' , fontWeight : 'bold' ,fontSize : '20px'}}>
                              One-Point Iteration Method
                         </Col>
                         
                     </Row>

                     <Row className = 'toprow' >
                         <Col span = {8} style = {{padding : '10px 0 0'}}>
                             <Row className = 'inputdata'>
                             <div>
                                <Input className = 'input' placeholder = 'ใส่สมการ' onChange = {this.onChangeEquation}/>
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                             <div>
                                <Input className = 'input' placeholder = 'X = 0.00' onChange = {this.onChangeX}/>
                            </div>
                             </Row>
                            
                             <Row className = 'inputdata'>
                             <div>
                                <Input className = 'input' placeholder = 'error = 0.000001' onChange = {this.onChangeError} />
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                             <Col span = {24} >
                              <Button onClick = {this.onClickCalculator}>คำนวณ</Button>
                            </Col>
                             </Row>
                         </Col>
                         <Col span = {16}>
                         <Table className = 'arrdata' columns = {this.state.colum} dataSource = {this.state.data} />
                         </Col>
                     </Row>
                    
            </div>
        )
    }
}
export default OnePoint