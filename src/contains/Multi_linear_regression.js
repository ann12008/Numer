import React from 'react'
import { Row, Col } from 'antd'
import {Input , Button ,Table} from 'antd'
import './matrix.css'
import InputMultiple  from '../components/InputMultiple'
import {calMultiple} from '../calculator'


const math = require('mathjs');


export default class Multi_linear_regression extends React.Component{
    state = {n : 2, matrixA : [[],[]]  ,valueX1 : '',valueX2 : '',valueX3 : '', colum : [{title : 'fX', dataIndex : 'fx'},{title : 'valueX' ,dataIndex : 'valuex'}] ,data : []}

    onChangeX1 = e => {
            this.setState({valueX1 : e.target.value})
    }
    onChangeX2 = e => {
        this.setState({valueX2 : e.target.value})
    }
    onChangeX3 = e => {
        this.setState({valueX3 : e.target.value})
    }
   

    onChangematrixXY = (e) =>{
        let index = e.target.name.split(" ")
        let value = e.target.value
        this.state.matrixA[parseInt(index[0])][parseInt(index[1])] = parseInt(value)
       
       
    
    }
    onClickmatrixadd = (e)=>{
        if(this.state.n < 10){
            this.setState({n : this.state.n+=1})
            this.state.matrixA.push([])
        }
    }
    onClickmatrixsubtract = (e)=>{
        if(this.state.n > 2){
            this.setState({n : this.state.n-=1})
            this.state.matrixA.pop([])
        }
    }
    onClickCalculator = (e)=>{
        
        this.setState({data : calMultiple(this.state.n,this.state.matrixA,this.state.valueX1,this.state.valueX2,this.state.valueX3)})
        
        
       
    }
    render(){
        return(
            <div>
                <Row>
                         <Col   span = {24}  style = {{textAlign : 'center' , fontWeight : 'bold' ,fontSize : '20px'}}>
                              Multi-linear Regression
                         </Col>
                         
                     </Row>

                     <Row className = 'toprow' >
                         <Col span = {12} style = {{padding : '10px 0 0'}}>
                             <Row className = 'inputdata'>
                             <div>
                             <Button onClick={this.onClickmatrixadd}> เพิ่มขนาดเมตตริกซ์ </Button>
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                             <div>
                             <Button onClick={this.onClickmatrixsubtract}> ลดขนาดเมตตริกซ์ </Button>
                            
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                             <div>
                             <Col span={24}> <InputMultiple  n={this.state.n} onChange={this.onChangematrixXY} /> </Col>
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                            <div >
                                    กรอก ค่า X1 ที่ต้องการหา
                            </div>
                            </Row>
                             <Row className = 'inputdata'>
                             <div>
                             <Input  style = {{width : '150px' }} placeholder = 'Example = 40000' onChange = {this.onChangeX1}/>
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                            <div >
                                    กรอก ค่า X2 ที่ต้องการหา
                            </div>
                            </Row>
                             <Row className = 'inputdata'>
                             <div>
                             <Input  style = {{width : '150px' }} placeholder = 'Example = 40000' onChange = {this.onChangeX2}/>
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                            <div >
                                    กรอก ค่า X3 ที่ต้องการหา
                            </div>
                            </Row>
                             <Row className = 'inputdata'>
                             <div>
                             <Input  style = {{width : '150px' }} placeholder = 'Example = 40000' onChange = {this.onChangeX3}/>
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                             <Col span = {24} >
                              <Button onClick = {this.onClickCalculator}>คำนวณ</Button>
                            </Col>
                             </Row>
                         </Col>
                         <Col span = {12}>
                         <Table className = 'arrdata' columns = {this.state.colum} dataSource = {this.state.data} />
                         </Col>
                     </Row>
              
            </div>
        )
    }
}