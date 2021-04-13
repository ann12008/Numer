import React from 'react';
import './App.css';
import Top_header from './components/Top_header'
import { Route, HashRouter ,Redirect  } from "react-router-dom"
import Bisection from './contains/Bisection'
import Fasle_Position from './contains/False_Position'
import One_Point from './contains/One_Point'
import Newton_Raphson from './contains/Newton_Raphson'
import Cramer_rule from './contains/Cramer_rule'
import Secant from './contains/Secant'
import Gauss_Elimination from './contains/Gauss_elimination'
import Gauss_Jordan from './contains/Gauss_Jordan'
import Lu_Decomposition from './contains/Lu_Decomposition';
import Jacobi from './contains/Jacobi';
import Guass_seidel from './contains/Gauss_Seidel';
import Conjugate from './contains/Conjugate';
import Newton from './contains/Newton';
import Lagrange from './contains/Lagrange';
import Spline from './contains/Spline';
import linear_regression from './contains/linear_regression';
import polynomial_regression from './contains/Polynomial_regression';
import Multi_linear_regression from './contains/Multi_linear_regression';
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
            <Route path = '/false-position' component = {Fasle_Position}/>
            <Route path = '/one-point' component = {One_Point}/>
             <Route path = '/newton-raphson' component = {Newton_Raphson}/>
             <Route path = '/secant' component = {Secant}/>
             <Route path = '/cramer' component = {Cramer_rule}/>
             <Route path = '/gauss-elimination' component = {Gauss_Elimination}/>
             <Route path = '/gauss-jordan' component = {Gauss_Jordan}/>
             <Route path = '/lu-decomposition' component = {Lu_Decomposition}/>
             <Route path = '/jacobi' component = {Jacobi}/>
             <Route path = '/gauss-seidel' component = {Guass_seidel}/>
             <Route path = '/conjugate' component = {Conjugate}/>
             <Route path = '/newton' component = {Newton}/>
             <Route path = '/lagrange' component = {Lagrange}/>
             <Route path = '/spline' component = {Spline}/>
             <Route path = '/linear-regression' component = {linear_regression}/>
             <Route path = '/polynomial-regression' component = {polynomial_regression}/>
             <Route path = '/multiple-linear-regression' component = {Multi_linear_regression}/>
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
