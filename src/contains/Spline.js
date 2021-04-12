import React from 'react'
import { Row, Col } from 'antd'
import {Input , Button ,Table} from 'antd'
import InputXY  from '../components/InputXY'
import {calSpline} from '../calculator'
import './matrix.css'


const math = require('mathjs');

export default class Spline extends React.Component{
    state = {n : 2, matrixA : [[],[]]  ,valueX : '', colum : [{title : 'fX', dataIndex : 'fx'},{title : 'valueX' ,dataIndex : 'valuex'}] ,data : []}

    onChangeX = e => {
            this.setState({valueX : e.target.value})
    }
   

    onChangematrixXY = (e) =>{
        let index = e.target.name.split(" ")
        let value = e.target.value
        this.state.matrixA[parseInt(index[0])][parseInt(index[1])] = value
       
       
    
    }
    onClickmatrixadd = (e)=>{
        if(this.state.n < 6){
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
        
        this.setState({data : calSpline(this.state.matrixA,this.state.valueX)})
        
        
       
    }
    render(){
        return(
            <div>
                  <Row>
                    <Col span={24} style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>
                                    Spline interpolation
                         </Col>
                    <Row className='rowButtonmatrix'>
                        <Col className='buttonmatrix'>
                            <Button onClick={this.onClickmatrixadd}> เพิ่มขนาดเมตตริกซ์ </Button>
                        </Col>
                        <Col className='buttonmatrix'>
                            <Button onClick={this.onClickmatrixsubtract}> ลดขนาดเมตตริกซ์ </Button>
                        </Col>

                    </Row>

                </Row>
                <Row className='titlematrix'>
                    <Col span={10}> Matrix A </Col>
                    
                </Row>
                <Row className='matrix'>
                    <Col span={24}> <InputXY  n={this.state.n} onChange={this.onChangematrixXY} /> </Col>
                   
                </Row>
                <Row>
                    <div style = {{padding : '0px 40px'  }}>
                        กรอก ค่า X ที่ต้องการหา
                    </div>
                </Row>
                <Row style = {{ width : '100px',padding : '10px 40px'  }}>
                            <div>
                            <Input  style = {{width : '150px' }} placeholder = 'Example = 40000' onChange = {this.onChangeX}/>
                            </div>
                 
                           
                </Row>
               
                <Row className='matrix'>
                    <Button onClick={this.onClickCalculator}>คำนวณ</Button>
                </Row>
                <Row >
                    <Col span={16}>
                        <Table className='showdata' columns={this.state.colum} dataSource={this.state.data} />
                    </Col>
                </Row>
            </div>
        )
    }
}