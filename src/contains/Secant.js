import React from 'react'
import { Row, Col } from 'antd'
import {Input , Button ,Table,Modal} from 'antd'
import apis from '../API/index'
import './root_of_equation.css'
import {calSecant} from '../calculator'


export default class Secant extends React.Component {
    
    state = {
        equation: '',
        x0: '',
        x1: '',
        error: '',
        colum: [{
            title: 'Iteration',
            dataIndex: 'iteration'
        },
        { title: 'X', dataIndex: 'x' },
        { title: 'Error', dataIndex: 'error' }],
        data: [],
      
        apiData: [],
        
    }

    async getData() {
        let tempData = null
        await apis.getRootofequation().then(res => { tempData = res.data })
        this.setState({ apiData: tempData })
        
        
        this.setState({
            equation: this.state.apiData[4]["equation"],
            x0: this.state.apiData[4]["xl"],
            x1: this.state.apiData[4]["xr"],
            error: this.state.apiData[4]["error"],
            isModalVisible: false
        })
    }
  
    onClickExample = e => {
        
            this.getData()
      
     
    }

    onChangeEquation = e => {
        this.setState({ equation: e.target.value })
    }
    onChangeX0 = e => {
        this.setState({ x0: e.target.value })
    }
    onChangeX1 = e => {
        this.setState({ x1: e.target.value })
    }

    onChangeError = e => {
        this.setState({ error: e.target.value })
    }

    onClickCalculator = e => {


        this.setState({ data: calSecant(this.state.equation, this.state.x0, this.state.x1, this.state.error) })
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
                                <Input className = 'input' placeholder = 'ใส่สมการ'  value = {this.state.equation} onChange = {this.onChangeEquation}/>
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                             <div>
                                <Input className = 'input' placeholder = 'X0 = 0.00'  value = {this.state.x0} onChange = {this.onChangeX0}/>
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                                 <div>
                                     <Input className = 'input' placeholder = 'X1 = 0.00'  value = {this.state.x1} onChange = {this.onChangeX1} />
                                 </div>
                             </Row>
                           
                             <Row className = 'inputdata'>
                             <div>
                                <Input className = 'input' placeholder = 'error = 0.000001' value = {this.state.error} onChange = {this.onChangeError} />
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                             <Col span = {12} >
                              <Button onClick = {this.onClickCalculator}>คำนวณ</Button>
                            </Col>
                            <Col span = {12} >
                            <Button size='large' type='primary' onClick={this.onClickExample}>ตัวอย่าง</Button>
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

