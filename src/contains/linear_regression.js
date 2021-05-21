import React from 'react'
import { Row, Col } from 'antd'
import {Input , Button ,Table} from 'antd'
import './matrix.css'
import InputXY  from '../components/InputXY'
import {calLinear,copyArray} from '../calculator'
import apis from '../API/index'
  




export default class linear_regression extends React.Component {
    state = {
        n: 2,
        matrixA: [[], []],

        valueX: '',
        colum: [{ title: 'fX', dataIndex: 'fx' },
        { title: 'valueX', dataIndex: 'valuex' }],
        data: [],
        
        apiData: [],
      
       
    }
    async getData() {
        let tempData = null
        await apis.getMatrixRegression().then(res => { tempData = res.data })
        this.setState({ apiData: tempData })
        
        // console.log(tempData)
        this.setState({
            n: this.state.apiData[0]["n"],

            matrixA: copyArray(this.state.apiData[0]["n"], this.state.apiData[0]["matrixA"]),



            valueX: this.state.apiData[0]["x"],


            
        })
    }
   
    onClickExample = e => {
       
            this.getData()
      
       
    }
    onChangeX = e => {
        this.setState({ valueX: e.target.value })
    }


    onChangematrixXY = (e) => {
        let index = e.target.name.split(" ")
        let value = e.target.value
        let arr = this.state.matrixA
        arr[parseInt(index[0])][parseInt(index[1])] = value
        this.setState({ matrixA: arr })


    }
    onClickmatrixadd = (e) => {
        if (this.state.n < 10) {
            this.setState({ n: this.state.n += 1 })
            this.state.matrixA.push([])
        }
    }
    onClickmatrixsubtract = (e) => {
        if (this.state.n > 2) {
            this.setState({ n: this.state.n -= 1 })
            this.state.matrixA.pop([])
        }
    }
    onClickCalculator = (e) => {

        this.setState({ data: calLinear(this.state.matrixA, this.state.valueX) })



    }
    render(){
        return(
            <div>
             
                <Row>
                    <Col span={24} style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>
                        Linear Regression
                         </Col>

                </Row>

                <Row className='toprow' >
                    <Col span={8} style={{ padding: '10px 0 0' }}>
                        <Row className='inputdata'>
                            <div>
                                <Button onClick={this.onClickmatrixadd}> เพิ่มขนาดเมตตริกซ์ </Button>
                            </div>
                        </Row>
                        <Row className='inputdata'>
                            <div>
                                <Button onClick={this.onClickmatrixsubtract}> ลดขนาดเมตตริกซ์ </Button>

                            </div>
                        </Row>
                        <Row className='inputdata'>
                            <div>
                                <Col span={24}> <InputXY n={this.state.n} value={this.state.matrixA} onChange={this.onChangematrixXY} /> </Col>
                            </div>
                        </Row>
                        <Row className='inputdata'>
                            <div >
                                กรอก ค่า X ที่ต้องการหา
                            </div>
                        </Row>
                        <Row className='inputdata'>
                            <div>
                                <Input style={{ width: '150px' }} placeholder='Example = 40000' value={this.state.valueX} onChange={this.onChangeX} />
                            </div>
                        </Row>
                        <Row className='inputdata'>
                            <Col >
                                <Button onClick={this.onClickCalculator}>คำนวณ</Button>
                            </Col>

                            <Col style={{ padding: '0px 0px 0px 20px' }} >
                                <Button size='large' type='primary' onClick={this.onClickExample}>ตัวอย่าง</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={16}>
                        <Table className='arrdata' columns={this.state.colum} dataSource={this.state.data} />
                    </Col>
                </Row>

            </div>
        )
    }
}