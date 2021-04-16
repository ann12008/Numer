import React from 'react'
import { Row, Col } from 'antd'
import {Input , Button ,Table} from 'antd'
import './matrix.css'
import Inputmatrix  from '../components/Inputmatrix'
import InputB  from '../components/InputB'
import apis from '../API/index'
import {Modal_matrix} from '../components/Modal'
import { calConjugate, copyArray } from '../calculator'

const math = require('mathjs');

export default class Conjugate extends React.Component{
    state = {n : 2,
        matrixA : [[],[]],
        matrixB :[],
        error : '',
        colum : [{title : 'X', dataIndex : 'x'},
        {title : 'valueX' ,dataIndex : 'valuex'}] ,
        data : [], 
        isModalVisible: false,
        apiData: [],
        hasData: false}
        async getData() {
            let tempData = null
            await apis.getMatrix().then(res => { tempData = res.data })
            this.setState({ apiData: tempData })
            this.setState({ hasData: true })
            // console.log(tempData)
        }
        onClickOk = e => {
            this.setState({ isModalVisible: false })
        }
        onClickInsert = e => {
            let index = e.currentTarget.getAttribute('name').split('_')
            index = parseInt(index[1])
            this.setState({
                n: this.state.apiData[index]["n"],
    
                matrixA: copyArray(this.state.apiData[index]["n"], this.state.apiData[index]["matrixA"]),
    
                matrixB: [...this.state.apiData[index]["matrixB"]],
    
                isModalVisible: false
            })
        }
        onClickExample = e => {
            if (!this.state.hasData) {
                this.getData()
            }
               this.setState({ isModalVisible: true })
           }
    onChangematrixA = (e) =>{
        let index = e.target.name.split(" ")
        let value = e.target.value 
        let arr = this.state.matrixA
        arr[parseInt(index[0])][parseInt(index[1])] = value
        this.setState({matrixA : arr})
    
    }
    onChangematrixB = (e) =>{
        let index = e.target.name.split(" ")
        let value = e.target.value
        let arr = this.state.matrixB
        arr[parseInt(index[1])] = value
        this.setState({matrixB : arr})
    
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
        
            this.setState({data : calConjugate(this.state.n,this.state.matrixA,this.state.matrixB,this.state.error)})
       
            
           
       
    }
    render(){
        return(
            <div>
                 <Modal_matrix
                    visible={this.state.isModalVisible}
                    onOK={this.onClickOk}
                    hasData={this.state.hasData}
                    apiData = {this.state.apiData}
                    onClick={this.onClickInsert}
                />
                <Row></Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>
                                 Conjugate Gradient Method
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
                    <Col span={10}> <Inputmatrix n={this.state.n} value = {this.state.matrixA} onChange={this.onChangematrixA} /> </Col>
                    <Col span={14}><InputB n={this.state.n} value = {this.state.matrixB} onChange={this.onChangematrixB} /> </Col>
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
                <Col >
                    <Button onClick={this.onClickCalculator}>คำนวณ</Button>
                    </Col>
                   
                    <Col style = {{padding : '0px 0px 0px 20px'}} >
                     <Button size='large' type='primary' onClick={this.onClickExample}>ตัวอย่าง</Button>
                    </Col>
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