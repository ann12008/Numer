import React from 'react'
import { Row, Col } from 'antd'
import {Input , Button ,Table,Modal} from 'antd'
import './root_of_equation.css'
import {calNewton} from '../calculator'
import apis from '../API/index'

class Newton_Raphson extends React.Component{
    state = {
        equation: '',
        x: '',
        error: '',
        colum: [{
            title: 'Iteration',
            dataIndex: 'iteration'
        },
        { title: 'X', dataIndex: 'x' },
        { title: 'Error', dataIndex: 'error' }],
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
            equation: this.state.apiData[index]["equation"],
            x: this.state.apiData[index]["xl"],
            error: this.state.apiData[index]["error"],
            isModalVisible: false
        })
    }
    onClickExample = e => {
        if (!this.state.hasData) {
            this.getData()
        }
        this.setState({ isModalVisible: true })
    }

    onChangeEquation = e => {
        this.setState({ equation: e.target.value })
    }
    onChangeX = e => {
        this.setState({ x: e.target.value })
    }

    onChangeError = e => {
        this.setState({ error: e.target.value })
    }

    onClickCalculator = e => {


        this.setState({ data: calNewton(this.state.equation, this.state.x, this.state.error) })
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
                         <Col   span = {24}  style = {{textAlign : 'center' , fontWeight : 'bold' ,fontSize : '20px'}}>
                              Newton-Raphson Method
                         </Col>
                         
                     </Row>

                     <Row className = 'toprow' >
                         <Col span = {8} style = {{padding : '10px 0 0'}}>
                             <Row className = 'inputdata'>
                             <div>
                                <Input className = 'input' placeholder = 'ใส่สมการ' value = {this.state.equation} onChange = {this.onChangeEquation}/>
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                             <div>
                                <Input className = 'input' placeholder = 'X = 0.00' value = {this.state.x} onChange = {this.onChangeX}/>
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

export default Newton_Raphson