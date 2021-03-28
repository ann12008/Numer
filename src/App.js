import React from 'react';
import './App.css';
import Top_header from './components/Top_header'
import { Route, HashRouter ,Redirect  } from "react-router-dom";
import Bisection from './contains/Bisection';

import { Row, Col } from 'antd'

class App extends React.Component {

  render() {
    return (
      <div className="App">
         
        <HashRouter>
          <Redirect exact from = '/' to = '/bisection'/>
        <Top_header />
        
        <div >
        
          <Row >
            <Col  className = 'content' span={18} offset={3}>
            <Route  path = '/bisection' component = {Bisection} />
          
            </Col>
         

          </Row>
        
        {/* <Route path = '/bisection'component = {Bisection}/>
         <Route path = '/false-position' component = {False_position} />
         <Route path = '/one-point' component = {One_point} />
         <Route path = '/newton-raphson' component = {Newton_raphson} />
         <Route path = '/secant' component = {Secant} />
        
         <Route path = '/cramer' component = {Cramer} />
         <Route path = '/guass-elimation' component = {Guass_elimation} />
         <Route path = '/lu-decompostion' component = {Lu_decomposition} />
         <Route path = '/jacobi-iteration' component = {Jacobi} />
         <Route path = '/guass-seidel' component = {Guass_seidel} />
         <Route path = '/guass-jordan' component = {Guass_jordan} />
         <Route path = '/conjugate-gradient' component = {Conjugate_gradient} /> */}
        </div>
        </HashRouter>
       

      
       
      </div>

    )
  }

}


export default App;
