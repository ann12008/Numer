import React from 'react'
import { Row, Col } from 'antd'
import {Input , Button ,Table,Modal} from 'antd'
import apis from '../API/index'
import './root_of_equation.css'
import {calFalse} from '../calculator'


class False_Position extends React.Component {
    state = {
        equation: '',
        xl: '',
        xr: '',
        error: '',
        x1: '',
        status: '',
        colum: [{
            title: 'Iteration',
            dataIndex: 'iteration'
        },
        { title: 'X1', dataIndex: 'x1' },
        { title: 'Error', dataIndex: 'error' }],
        data: [],
        
      
        apiData: [],
      
    }
    async getData() {
        let tempData = null
        await apis.getRootofequation().then(res => { tempData = res.data })
        this.setState({ apiData: tempData })
       
        
        this.setState({
            equation: this.state.apiData[1]["equation"],
            xl: this.state.apiData[1]["xl"],
            xr: this.state.apiData[1]["xr"],
            error: this.state.apiData[1]["error"],
           
        })
    }
   
   
    onClickExample = e =>{
        
            this.getData()
        
       
    }

    onChangeEquation = e => {
        this.setState({ equation: e.target.value })
        
    }
    onChangeXL = e => {
        this.setState({ xl: e.target.value })
    }
    onChangeXR = e => {
        this.setState({ xr: e.target.value })
    }
    onChangeError = e => {
        this.setState({ error: e.target.value })
    }

    onClickCalculator = e => {


        this.setState({ data: calFalse(this.state.equation, this.state.xl, this.state.xr, this.state.error) })
    }

    render(){
        return(
            <div>
                    
                     <Row>
                         <Col   span = {24}  style = {{textAlign : 'center' , fontWeight : 'bold' ,fontSize : '20px'}}>
                              False-Position Method
                         </Col>
                         
                     </Row>

                     <Row className = 'toprow' >
                         <Col span = {8} style = {{padding : '10px 0 0'}}>
                             <Row className = 'inputdata'>
                             <div>
                                <Input className = 'input' placeholder = '????????????????????????' value = {this.state.equation} onChange = {this.onChangeEquation}/>
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                             <div>
                                <Input className = 'input' placeholder = 'XL = 0.00' value = {this.state.xl} onChange = {this.onChangeXL}/>
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                             <div>
                                <Input className = 'input' placeholder = 'XR = 0.00' value = {this.state.xr}onChange = {this.onChangeXR}/>
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                             <div>
                                <Input className = 'input' placeholder = 'error = 0.000001'value = {this.state.error} onChange = {this.onChangeError} />
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                             <Col span = {12} >
                              <Button onClick = {this.onClickCalculator}>???????????????</Button>
                            </Col>
                            <Col span = {12} >
                            <Button size='large' type='primary' onClick={this.onClickExample}>????????????????????????</Button>
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
export default False_Position