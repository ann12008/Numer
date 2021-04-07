import React from 'react'
import { Row, Col } from 'antd'
import {Input , Button ,Table} from 'antd'
import './matrix.css'
import Inputmatrix  from '../components/Inputmatrix'
import InputB  from '../components/InputB'
import { matrix } from 'mathjs'

export default class Cramer_rule extends React.Component{

    state = {n : 2, matrix : [[],[],[],[],[],[]],matrixB :[] }

    onChangematrixA = (e) =>{
        let index = e.target.name.split(" ")
        this.state.matrix[parseInt(index[0])][parseInt(index[1])] = e.target.value
    
    }
    onChangematrixB = (e) =>{
        let index = e.target.name
        this.state.matrixB[parseInt(index[0])] = e.target.value
        console.log(this.state.matrixB[0])
        console.log(this.state.matrixB[1])
    
    }
    onClickmatrixadd = (e)=>{
        if(this.state.n < 6){
            this.setState({n : this.state.n+=1})
        }
    }
    onClickmatrixsubtract = (e)=>{
        if(this.state.n > 2){
            this.setState({n : this.state.n-=1})
        }
    }

    
    
    render(){
        return(
            <div>
                <Row>
                    <Col span={24} style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>
                        Cramer's Rule
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
                <Row className = 'titlematrix'>
                    <Col span = {10}> Matrix A </Col>
                    <Col span = {14}> Matrix B </Col>
                </Row>
                <Row className='matrix'>
                    <Col span = {10}> <Inputmatrix n={this.state.n} onChange={this.onChangematrixA} /> </Col>
                   <Col span = {14}><InputB n={this.state.n} onChange={this.onChangematrixB} /> </Col>
                </Row>
            </div>
        )
    }
}