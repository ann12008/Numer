import React from 'react'
import { Row, Col } from 'antd'
import {Input , Button ,Table} from 'antd'
import './root_of_equation.css'
import {calSecant} from '../calculator'


export default class Secant extends React.Component{
    state = {equation : '' , x0 : '',x1 :'',error : '',colum :[{title : 'Iteration',dataIndex : 'iteration'},{title : 'X',dataIndex : 'x'},{title : 'Error',dataIndex : 'error'}],data : []}
        
    onChangeEquation = e =>{
        this.setState({equation : e.target.value})
    }
    onChangeX0 = e =>{
        this.setState({x0 : e.target.value})
    }
    onChangeX1 = e =>{
        this.setState({x1 : e.target.value})
    }
    
    onChangeError = e =>{
        this.setState({error : e.target.value})
    }

    onClickCalculator = e =>{

        
        this.setState({data : calSecant(this.state.equation ,this.state.x0 ,this.state.x1,this.state.error)})
    }
    render(){
        return(
            <div>
                 <Row>
                         <Col   span = {24}  style = {{textAlign : 'center' , fontWeight : 'bold' ,fontSize : '20px'}}>
                              Secant Method
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
                                <Input className = 'input' placeholder = 'X0 = 0.00' onChange = {this.onChangeX0}/>
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                                 <div>
                                     <Input className = 'input' placeholder = 'X1 = 0.00' onChange = {this.onChangeX1} />
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

