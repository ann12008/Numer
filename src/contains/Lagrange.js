import React from 'react'
import { Row, Col } from 'antd'
import {Input , Button ,Table} from 'antd'
import './matrix.css'
import InputXY  from '../components/InputXY'
import {calLagrange ,copyArray} from '../calculator'
import apis from '../API/index'


export default class Lagrange extends React.Component{
    state = {n : 2, 
        matrixA : [[],[]] ,
        Point : [] ,
        valueX : '', 
        colum : [{title : 'fX', dataIndex : 'fx'},
        {title : 'valueX' ,dataIndex : 'valuex'}] ,
        data : [],
      
        apiData: [],
       
       }
        async getData() {
            let tempData = null
            await apis.getMatrixInterpolation().then(res => { tempData = res.data })
            this.setState({ apiData: tempData })
            
           
            this.setState({
                n: this.state.apiData[1]["n"],
    
                matrixA: copyArray(this.state.apiData[1]["n"], this.state.apiData[1]["matrixA"]),
                
                Point : [...this.state.apiData[1]["point"]],

                valueX : this.state.apiData[1]["x"],
                
                
                
            })
        }


        onClickExample = e => {
            
                this.getData()
          
               
           }
    onChangeX = e => {
            this.setState({valueX : e.target.value})
    }
    onChangePoint = e => {
        let index = []
         index =  e.target.value
        
        
        
        
        this.setState({Point : index.split(",")})
}

    onChangematrixXY = (e) =>{
        let index = e.target.name.split(" ")
        let value = e.target.value
        let arr = this.state.matrixA
       arr[parseInt(index[0])][parseInt(index[1])] = value
       this.setState({matrixA : arr})
       
       
    
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
        
        this.setState({data : calLagrange(this.state.matrixA,this.state.Point,this.state.valueX)})
        
        
       
    }
    render(){
        return(
            <div>
                
                 <Row>
                    <Col span={24} style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>
                                    Lagrange polynomials
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
                    <Col span={24}> <InputXY  n={this.state.n} value = {this.state.matrixA}onChange={this.onChangematrixXY} /> </Col>
                   
                </Row>
                <Row>
                    <div style = {{padding : '0px 40px'  }}>
                        กรอก ค่า X ที่ต้องการหา
                    </div>
                </Row>
                <Row style = {{ width : '100px',padding : '10px 40px'  }}>
                            <div>
                            <Input  style = {{width : '150px' }} placeholder = 'Example = 40000' value = {this.state.valueX} onChange = {this.onChangeX}/>
                            </div>
                 
                           
                </Row>
                <Row>
                    <div style = {{padding : '0px 40px'  }}>
                         ใส่จำนวนจุดที่ต้องการ
                    </div>
                </Row>
                <Row style = {{ width : '100px',padding : '10px 40px'  }}>
                            <div>
                            <Input  style = {{width : '150px' }} placeholder = 'Example = 1,2,3' value = {this.state.Point} onChange = {this.onChangePoint}/>
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