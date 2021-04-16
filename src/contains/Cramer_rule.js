import React from 'react'
import { Row, Col } from 'antd'
import {Input , Button ,Table,Modal} from 'antd'
import './matrix.css'
import apis from '../API/index'
import Inputmatrix  from '../components/Inputmatrix'
import InputB  from '../components/InputB'

import { calCramer } from '../calculator'
const math = require('mathjs');

export default class Cramer_rule extends React.Component{

    state = {
        n: 2,
        matrixA: [[],[]],
         matrixB: [],
        colum: [{
            title: 'X',
            dataIndex: 'x'
        },
        {
            title: 'valueX',
            dataIndex: 'valuex'
        }],
        data: [],
        isModalVisible: false,
        apiData: [],
        hasData: false
    }

    async getData() {
        let tempData = null
        await apis.getRootofequation().then(res => { tempData = res.data })
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
            matrixA: this.state.apiData[index]["matrixA"],
            matrixB: this.state.apiData[index]["matrixB"],
            
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
    onClickCalculator = (e)=>{
        try{
            this.setState({data : calCramer(this.state.n,this.state.matrixA,this.state.matrixB)})
        }
        catch(error){
            
        }
    }

    
    
    render(){
        return(
            <div>
                 <Modal
                    title ='ตัวอย่าง'
                    visible ={this.state.isModalVisible}
                    onOK={this.onClickOk}
                    onCancel={this.onClickOk}
                    footer = {[
                        <Button type = 'primary' onClick={this.onClickOk}>
                            Ok
                        </Button>
                    ]}
                >
                    {this.state.hasData ?
                        this.state.apiData.map((x,i) =>(
                            <Row>
                                    <Col span={12}>{x['equation']}</Col>
                                    <Col span={12}>
                                        <Button name = {'insert_'+i} type='primary' onClick={this.onClickInsert}>Insert</Button>
                                    </Col>
                                    <hr/>

                            </Row>
                        ))
                        : <span style={{fontSize:"25px", textAlign:"center"}}>กำลังโหลดข้อมูล</span>}
                    
                </Modal>
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
                <Row className='titlematrix'>
                    <Col span={10}> Matrix A </Col>
                    <Col span={14}> Matrix B </Col>
                </Row>
                <Row className='matrix'>
                    <Col span={10}> <Inputmatrix n={this.state.n} value = {this.state.matrixA} onChange={this.onChangematrixA} /> </Col>
                    <Col span={14}><InputB n={this.state.n} value = {this.state.matrixB} onChange={this.onChangematrixB} /> </Col>
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