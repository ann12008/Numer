import React from 'react'
import { Row, Col } from 'antd'
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

class Top_header extends React.Component {
    render() {
        return (
            <div>
                <Row className='menu'>

                    <Col className='logo' span={4}>
                        Numer
                    </Col>

                    <Col className='topic' span={5}>

                        <Dropdown overlay={rootofequation}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Root of Equations <DownOutlined />
                            </a>
                        </Dropdown>
                    </Col>
                   
                    <Col className='topic' span={5}>

                    <Dropdown overlay={matrix}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Matrix <DownOutlined />
                            </a>
                        </Dropdown>
                    </Col>

                    <Col className='topic' span={5}>

                    <Dropdown overlay={Interpolation}>
                             <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                               Interpolation <DownOutlined />
                            </a>
    </Dropdown>
</Col>
                </Row>
            </div>
        )
    }
}
export default Top_header