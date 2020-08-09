import React from 'react';
import sliderImg from '../../images/levels.png';
import { Person, Description, ShoppingCart } from '@material-ui/icons';
import { Layout, Input } from 'antd';
import './header.css';
import { Row, Col } from 'antd';
import Hidden from '@material-ui/core/Hidden';
const { Search } = Input;

const MenuIcon = ({ children }) => {
  return <div className="menu">{children}</div>;
};

const Header = () => {
  let { Header } = Layout;
  return (
    <div>
      <Header>
        <Row>
          <Col xs={4} sm={3} md={6} align="start">
            <img src={sliderImg} alt="sliderImg" className="sliderImg" />
          </Col>
          <Col xs={10} md={12} align="center">
            <Search
              placeholder="Search"
              onSearch={(value) => console.log(value)}
              className="search"
            />
          </Col>
          <Col xs={10} md={6} align="end">
            <MenuIcon>
              <ShoppingCart fontSize="large" />
              <Hidden only="xs">
                <div>Cart</div>
                <div className="order"></div>
              </Hidden>
            </MenuIcon>
            <MenuIcon>
              <Description fontSize="large" />
              <Hidden only="xs">
                <div>Orders</div>
              </Hidden>
            </MenuIcon>
            <MenuIcon>
              <Person fontSize="large" />
              <Hidden only="xs">
                <div>Account</div>
              </Hidden>
            </MenuIcon>
          </Col>
        </Row>
      </Header>
    </div>
  );
};

export default Header;
