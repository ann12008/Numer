import React from 'react'
import { Row, Col, Button } from 'antd'
import './Top_header.css'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'

const rootofequation = (
    <Menu className='menu_Topic'>

        <Menu.Item className = 'menu_rootofequation-item'> <Link to = '/bisection' >Bisection Method </Link> </Menu.Item>
        <Menu.Item className = 'menu_rootofequation-item'><Link to = '/false-position' >False-Position Method </Link> </Menu.Item>
        <Menu.Item className = 'menu_rootofequation-item'><Link to = '/one-point' >One-Point Iteration Method </Link> </Menu.Item>
        <Menu.Item className = 'menu_rootofequation-item'><Link to = '/newton-raphson' >Newton-Raphson Method </Link> </Menu.Item>
        <Menu.Item className = 'menu_rootofequation-item'><Link to = '/secant' >Secant Method </Link> </Menu.Item>
        
     
        
    </Menu>
    
)
const matrix =(
    <Menu className='menu_Topic'>

    <Menu.Item className = 'menu_rootofequation-item'> <Link to = '/cramer' >Cramer's Rule </Link> </Menu.Item>
    <Menu.Item className = 'menu_rootofequation-item'> <Link to = '/gauss-elimination' >Gauss Elimination Method</Link> </Menu.Item>
    <Menu.Item className = 'menu_rootofequation-item'> <Link to = '/gauss-jordan' >Gauss-Jordan Method</Link> </Menu.Item>
    <Menu.Item className = 'menu_rootofequation-item'> <Link to = '/lu-decomposition' >LU-Decomposition Method</Link> </Menu.Item>
    <Menu.Item className = 'menu_rootofequation-item'> <Link to = '/jacobi' >Jacobi Iteration Method</Link> </Menu.Item>
    <Menu.Item className = 'menu_rootofequation-item'> <Link to = '/gauss-seidel' >Gauss-Seidel Iteration Method</Link> </Menu.Item>
    <Menu.Item className = 'menu_rootofequation-item'> <Link to = '/conjugate' >Conjugate Gradient Method</Link> </Menu.Item>

    
</Menu>
)

const Interpolation =(
    <Menu className='menu_Topic'>

    <Menu.Item className = 'menu_rootofequation-item'> <Link to = '/newton' >Newton's divided-differences </Link> </Menu.Item>
    <Menu.Item className = 'menu_rootofequation-item'> <Link to = '/lagrange' >Lagrange polynomials </Link> </Menu.Item>
    <Menu.Item className = 'menu_rootofequation-item'> <Link to = '/spline' >Spline interpolation </Link> </Menu.Item>
    
    
</Menu>
)

const Regression =(
    <Menu className='menu_Topic'>

    <Menu.Item className = 'menu_rootofequation-item'> <Link to = '/linear-regression' >Linear Regression </Link> </Menu.Item>
    <Menu.Item className = 'menu_rootofequation-item'> <Link to = '/polynomial-regression' >polynomial Regression </Link> </Menu.Item>
    
    <Menu.Item className = 'menu_rootofequation-item'> <Link to = '/multiple-linear-regression' >Multiple Linear Regression </Link> </Menu.Item>
    
    
</Menu>
)



class Topheader extends React.Component {
    render() {
        return (
            <div>
                <Row className='menu'>

                    <Col className='logo' span={4}>
                        NUMER
                    </Col>

                    <Col className='topic' span={4}>

                        <Dropdown overlay={rootofequation}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                ROOT OF EQUATIONS <DownOutlined />
                            </a>
                        </Dropdown>
                    </Col>

                    <Col className='topic' span={4}>

                        <Dropdown overlay={matrix}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                MATRIX <DownOutlined />
                            </a>
                        </Dropdown>
                    </Col>

                    <Col className='topic' span={4}>

                        <Dropdown overlay={Interpolation}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                INTERPOLATION <DownOutlined />
                            </a>
                        </Dropdown>
                    </Col>
                    <Col className='topic' span={4}>

                        <Dropdown overlay={Regression}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                 REGRESSION <DownOutlined />
                            </a>
                        </Dropdown>
                    </Col>
                    <Col className='topic' span={4}>

                                        <Button ><Link to  = '/Swagger'>Swagger</Link></Button>

                    </Col>
                </Row>
            </div>
        )
    }
}
export default Topheader