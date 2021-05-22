import React from 'react'
import { Row, Col } from 'antd'
import { Button ,Table} from 'antd'
import './matrix.css'
import apis from '../API/index'
import Inputmatrix  from '../components/Inputmatrix'
import InputB  from '../components/InputB'


import { calCramer , copyArray } from '../calculator'


export default class Cramer_rule extends React.Component{

    state = {
        n: 2,
        matrixA: [[],[]],
        matrixB: [],
        colum: [{title: 'X',dataIndex: 'x'},
        {title: 'ValueX',dataIndex: 'valuex'}],
        data: [],
      
        apiData: [],
       
    }
    
    async getData() {
        let tempData = null
        await apis.getMatrix().then(res => { tempData = res.data })
        this.setState({ apiData: tempData })
       
       
        this.setState({
            n: this.state.apiData[0]["n"],
          

             matrixA: copyArray(this.state.apiData[0]["n"],this.state.apiData[0]["matrixA"]),

            matrixB: [...this.state.apiData[0]["matrixB"]],
            
           
        })
    }


    onClickExample = e => {
        
            this.getData()
       
       
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
        
            this.setState({data : calCramer(this.state.n,this.state.matrixA,this.state.matrixB)})
       
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