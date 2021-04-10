import React from 'react'
import { Row, Col } from 'antd'
import {Input , Button ,Table} from 'antd'
import './matrix.css'
import Inputmatrix  from '../components/Inputmatrix'
import InputB  from '../components/InputB'

import { calSeidel } from '../calculator'
import { render } from '@testing-library/react'
const math = require('mathjs');

export default class Guass_seidel extends React.Component{
    state = {n : 2, matrixA : [[],[]],error : ' ',matrixB :[] , colum : [{title : 'X', dataIndex : 'x'},{title : 'valueX' ,dataIndex : 'valuex'}] ,data : []}
    onChangematrixA = (e) =>{
        let index = e.target.name.split(" ")
        let value = e.target.value 
        this.state.matrixA[parseInt(index[0])][parseInt(index[1])] = value
    
    }
    onChangematrixB = (e) =>{
        let index = e.target.name.split(" ")
        let value = e.target.value
        this.state.matrixB[parseInt(index[1])] = value
        // console.log(this.state.matrixB[0])
        // console.log(this.state.matrixB[1])
    
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
    onChangeError = e => {
        this.setState({error : e.target.value})
    }
    onClickCalculator = (e)=>{
        
            this.setState({data : calSeidel(this.state.n,this.state.matrixA,this.state.matrixB,this.state.error)})
       
            
           
       
    }
    render(){
        return(
            <div>
                <Row>
                    <Col span={24} style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>
                        Gauss-Seidel Iteration Method
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
                    <Col span={14}> Matrix B </Col>
                </Row>
                <Row className='matrix'>
                    <Col span={10}> <Inputmatrix n={this.state.n} onChange={this.onChangematrixA} /> </Col>
                    <Col span={14}><InputB n={this.state.n} onChange={this.onChangematrixB} /> </Col>
                </Row>
                <Row>
                    <div style = {{padding : '0px 40px'  }}>
                        กรอก Error
                    </div>
                </Row>
                <Row style = {{ width : '100px',padding : '0px 40px'  }}>
                            <div>
                            <Input  style = {{width : '150px' }} placeholder = 'Example = 0.00001' onChange = {this.onChangeError}/>
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