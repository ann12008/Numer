import React from 'react'
import { Row, Col } from 'antd'
import {Input , Button ,Table} from 'antd'
import './Bisection.css'
import {calBisection} from '../calculator'

class Bisection extends React.Component {

    state = { equation : '' , xl : '' ,xr : '' , error : '' , status : null  , colum : [{title : 'Iteration', dataIndex : 'iteration'},{title : 'Xm', dataIndex : 'xm'},{title : 'Error',dataIndex : 'error'}] ,data : []};
    
    onChangeEquation = e =>{
        this.setState({equation : e.target.value})
    }
    onChangeXL = e =>{
        this.setState({xl : e.target.value})
    }
    onChangeXR = e =>{
        this.setState({xr : e.target.value})
    }
    onChangeError = e =>{
        this.setState({error : e.target.value})
    }

    onClickCalculator = e =>{

        
        this.setState({data : calBisection(this.state.equation ,this.state.xl , this.state.xr,this.state.error)})
    }
    


    

    render() {
    
        
        return (
            <div>
                     <Row>
                         <Col   span = {24}  style = {{textAlign : 'center' , fontWeight : 'bold' ,fontSize : '20px'}}>
                              Bisection Method
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
                                <Input className = 'input' placeholder = 'XL = 0.00' onChange = {this.onChangeXL}/>
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                             <div>
                                <Input className = 'input' placeholder = 'XR = 0.00' onChange = {this.onChangeXR}/>
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
                     {/* <Row style ={{ padding : '20px 20px 0px'}}>
                         <Col className = 'colum' span={3} >
                            <div>
                                <Input className = 'input' placeholder = 'ใส่สมการ' onChange = {this.onChangeEquation}/>
                            </div>
                         </Col>
                         <Col className = 'colum' span={3}>
                            <div>
                                <Input className = 'input' placeholder = 'XL = 0.00' onChange = {this.onChangeXL}/>
                            </div>
                         </Col>
                         <Col className = 'colum' span={3} >
                            <div>
                                <Input className = 'input' placeholder = 'XR = 0.00' onChange = {this.onChangeXR}/>
                            </div>
                         </Col>
                         <Col className = 'colum' span={3} >
                            <div>
                                <Input className = 'input' placeholder = 'error = 0.000001' onChange = {this.onChangeError} />
                            </div>
                         </Col>
                     </Row>
                     <Row>
                          <Col span = {24} >
                              <Button onClick = {this.onClickCalculator}>คำนวณ</Button>
                          </Col>

                     </Row>
                     <Table className = 'arrdata' columns = {this.state.colum} dataSource = {this.state.data} /> */}
                         
                     
            </div>
        )
    }


}
export default Bisection