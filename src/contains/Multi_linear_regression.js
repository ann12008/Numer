import React from 'react'
import { Row, Col } from 'antd'
import {Input , Button ,Table} from 'antd'
import './matrix.css'
import InputMultiple  from '../components/InputMultiple'
import {calMultiple,copyArray} from '../calculator'
import apis from '../API/index'



export default class Multi_linear_regression extends React.Component{
    state = {
         n : 2,
         matrixA : [[],[]]  ,
         valueX1 : '',
         valueX2 : '',
         valueX3 : '',
          colum : [{title : 'fX', dataIndex : 'fx'},
          {title : 'valueX' ,dataIndex : 'valuex'}] ,
          data : [],
         
          apiData: [],
        
         
        }
          async getData() {
            let tempData = null
            await apis.getMatrixRegression().then(res => { tempData = res.data })
            this.setState({ apiData: tempData })
           
            // console.log(tempData)
            this.setState({
                n: this.state.apiData[2]["n"],
    
                matrixA: copyArray(this.state.apiData[2]["n"], this.state.apiData[2]["matrixA"]),
    
                valueX1: this.state.apiData[2]["x1"],
    
                valueX2: this.state.apiData[2]["x2"],

                valueX3: this.state.apiData[2]["x3"],
    
    
            })
        }
      
        onClickExample = e => {
           
                this.getData()
           
           
        }
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
        let arr = this.state.matrixA
        arr[parseInt(index[0])][parseInt(index[1])] = value
        this.setState({ matrixA: arr })
       
       
    
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
                             <Col span={24}> <InputMultiple  n={this.state.n}  value = {this.state.matrixA} onChange={this.onChangematrixXY} /> </Col>
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                            <div >
                                    กรอก ค่า X1 ที่ต้องการหา
                            </div>
                            </Row>
                             <Row className = 'inputdata'>
                             <div>
                             <Input  style = {{width : '150px' }} placeholder = 'Example = 40000'  value = {this.state.valueX1} onChange = {this.onChangeX1}/>
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                            <div >
                                    กรอก ค่า X2 ที่ต้องการหา
                            </div>
                            </Row>
                             <Row className = 'inputdata'>
                             <div>
                             <Input  style = {{width : '150px' }} placeholder = 'Example = 40000'  value = {this.state.valueX2} onChange = {this.onChangeX2}/>
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                            <div >
                                    กรอก ค่า X3 ที่ต้องการหา
                            </div>
                            </Row>
                             <Row className = 'inputdata'>
                             <div>
                             <Input  style = {{width : '150px' }} placeholder = 'Example = 40000'   value = {this.state.valueX3} onChange = {this.onChangeX3}/>
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                            <Col >
                                <Button onClick={this.onClickCalculator}>คำนวณ</Button>
                            </Col>

                            <Col style={{ padding: '0px 0px 0px 20px' }} >
                                <Button size='large' type='primary' onClick={this.onClickExample}>ตัวอย่าง</Button>
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