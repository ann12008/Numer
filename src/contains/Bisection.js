import React from 'react'
import { Row, Col } from 'antd'
import {Input , Button ,Table,Modal} from 'antd'
import apis from '../API/index'
import './root_of_equation.css'
import { calBisection } from '../calculator'




class Bisection extends React.Component {

    state = { 
        equation : '',
         xl : '' ,
         xr : '' , 
         error : '' , 
        
         colum : [
             {title : 'Iteration', dataIndex : 'iteration'},
             {title : 'Xm', dataIndex : 'xm'},
             {title : 'Error',dataIndex : 'error'}
            ] ,
            data : [],
           
            apiData : [],
           
        };

    async getData(){

                let tempData = null
                await apis.getRootofequation().then(res => {tempData = res.data})
                this.setState({apiData:tempData})
              
                console.log(this.state.apiData)
                console.log(this.state.apiData[0])
                
                this.setState({
                    equation: this.state.apiData[0]["equation"],
                    xl : this.state.apiData[0]["xl"],
                    xr : this.state.apiData[0]["xr"],
                    error : this.state.apiData[0]["error"],
                    
                })
                
            }   
            
    onClickExample = e =>{
                  
                        this.getData()
                    
                    
                  
                
               
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