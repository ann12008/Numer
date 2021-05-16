import React from 'react'
import { Row, Col } from 'antd'
import {Input , Button ,Table,Modal} from 'antd'
import apis from '../API/index'
import './root_of_equation.css'
import { calBisection } from '../calculator'
import {Modal_roe} from '../components/Modal'



class Bisection extends React.Component {

    state = { 
        equation : '' ,
         xl : '' ,
         xr : '' , 
         error : '' , 
       
         colum : [
             {title : 'Iteration', dataIndex : 'iteration'},
             {title : 'Xm', dataIndex : 'xm'},
             {title : 'Error',dataIndex : 'error'}
            ] ,
            data : [],
            isModalVisible : false,
            apiData : [],
            hasData : false
        };

    async getData(){
                let tempData = null
                await apis.getRootofequation().then(res => {tempData = res.data})
                this.setState({apiData:tempData})
                this.setState({hasData:true})
                // console.log(tempData)
            }
    onClickOk = e =>{
                this.setState({isModalVisible:false})
            }
    onClickInsert = e =>{
         let index = e.currentTarget.getAttribute('name').split('_')
                index = parseInt(index[1])
                this.setState({
                    equation: this.state.apiData[index]["equation"],
                    xl : this.state.apiData[index]["xl"],
                    xr : this.state.apiData[index]["xr"],
                    error : this.state.apiData[index]["error"],
                    isModalVisible : false
                })
            }

            
            
    onClickExample = e =>{
                if(!this.state.hasData){
                    this.getData()
                }
                this.setState({isModalVisible:true})
            }
    onChangeEquation = e =>{
        this.setState({equation : e.target.value})
       
    }
    onChangeXL = e =>{
        this.setState({xl : e.target.value})
    }
    onChangeXR = e =>{
        this.setState({xr : e.target.value})
    }
    onChangeError = e =>{
        this.setState({error : e.target.value})
    }

    

    onClickCalculator = e =>{

        
        this.setState({data : calBisection(this.state.equation ,this.state.xl , this.state.xr,this.state.error)})
    }
    


    

    render() {
    
        
        return (
            <div>
                
                <Modal_roe 
                    visible={this.state.isModalVisible}
                    onOK={this.onClickOk}
                    hasData={this.state.hasData}
                    apiData = {this.state.apiData}
                    onClick={this.onClickInsert}
                />
                     <Row>
                         <Col   span = {24}  style = {{textAlign : 'center' , fontWeight : 'bold' ,fontSize : '20px'}}>
                              Bisection Method
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
                                <Input className = 'input' placeholder = 'XL = 0.00' value = {this.state.xl} onChange = {this.onChangeXL}/>
                            </div>
                             </Row>
                             <Row className = 'inputdata'>
                             <div>
                                <Input className = 'input' placeholder = 'XR = 0.00'value = {this.state.xr} onChange = {this.onChangeXR}/>
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
export default Bisection