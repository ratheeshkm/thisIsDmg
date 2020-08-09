import React, { Fragment } from 'react';
import Header from '../Header';
import { Row, Col, Select } from 'antd';
import './home.css';
import { CloseCircleFilled } from '@ant-design/icons';
import PremiumBestSeller from './PremiumBestSeller';
import ProductList from './ProductList';
import Hidden from '@material-ui/core/Hidden';

const { Option } = Select;
const Home = () => {
  const bestSeller = ['Premium', 'Economy'];
  return (
    <Fragment>
      <Header />
      <Row>
        <Col>
          <div className="recomented-title">Recomented Products</div>
        </Col>
      </Row>
      <Row>
        <Col span={12} xs={24} md={12} align="start">
          <div className="filter-title"> Selected Filters: </div>
          <span className="filter">
            Continental{' '}
            <span className="icons-list">
              <CloseCircleFilled className="cancelIcon" />
            </span>
          </span>
          <span className="filter">
            Continental{' '}
            <span className="icons-list">
              <CloseCircleFilled className="cancelIcon" />
            </span>
          </span>
        </Col>
        <Hidden only="xs">
          <Col span={12} xs={24} md={12} align="end" className="sort">
            Sort By:{' '}
            <Select defaultValue="lucy" style={{ width: 120 }} size="large">
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>]
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Col>
        </Hidden>
      </Row>
      <Row>
        <Col span={24}>
          <hr className="hr" />
        </Col>
      </Row>
      <Row gutter={16}>
        {bestSeller.map((item, index) => (
          <Col span={12} xs={24} md={12} key={index}>
            <PremiumBestSeller category={item} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col span={24}>
          {[...Array(3)].map((item, index) => (
            <ProductList index={index} key={index} />
          ))}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="load-more"> Load More Results</div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Home;
