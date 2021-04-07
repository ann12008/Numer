import React from 'react'
import { Row, Col } from 'antd'
import './Top_header.css'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
const menu = (
    <Menu className='menu_rootofequation'>

        <Menu.Item className = 'menu_rootofequation-item'> <Link to = '/bisection' >Bisection Method </Link> </Menu.Item>
        <Menu.Item className = 'menu_rootofequation-item'><Link to = '/false-position' >False-Position Method </Link> </Menu.Item>
        <Menu.Item className = 'menu_rootofequation-item'><Link to = '/one-point' >One-Point Iteration Method </Link> </Menu.Item>
        <Menu.Item className = 'menu_rootofequation-item'><Link to = '/newton-raphson' >Newton-Raphson Method </Link> </Menu.Item>
        <Menu.Item className = 'menu_rootofequation-item'><Link to = '/secant' >Secant Method </Link> </Menu.Item>
        <Menu.Item className = 'menu_rootofequation-item'><Link to = '/cramer' >Cramer's Rule </Link> </Menu.Item>
        
    </Menu>
)

class Top_header extends React.Component {
    render() {
        return (
            <div>
                <Row className='menu'>

                    <Col className='logo' span={6}>
                        Numer
                    </Col>

                    <Col className='topic1' span={6}>

                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Root of Equations <DownOutlined />
                            </a>
                        </Dropdown>
                    </Col>
                   
                    <Col span={12}>


                    </Col>
                </Row>
            </div>
        )
    }
}
export default Top_header