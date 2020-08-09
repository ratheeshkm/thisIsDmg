import React from 'react';
import { Row, Col, Card } from 'antd';
import {
  BestSellerTitle,
  ApprovedImage,
  ModalText,
  Stock,
  Price,
  Total,
  ProdQty,
  AddToCart,
} from '../common';
import Hidden from '@material-ui/core/Hidden';

const ProductList = ({ index }) => {
  return (
    <Card className="product-list">
      <Hidden mdDown>
        <Row>
          <Col span={3} align="start">
            <BestSellerTitle
              cssStyle="productListTile"
              title="Continental PremiumContact™ 6"
            />
          </Col>
          <Col span={3} align="middle">
            <ApprovedImage />
          </Col>
          <Col span={3} align="middle">
            <ModalText styleOverride="prod-list-text" />
          </Col>
          <Col span={3} align="middle">
            <Stock index={index} />
          </Col>
          <Col span={3} align="middle">
            <Price />
          </Col>
          <Col span={3} align="middle">
            <ProdQty />
          </Col>
          <Col span={3} align="middle">
            <Total />
          </Col>
          <Col span={3} align="middle">
            <AddToCart index={index} />
          </Col>
        </Row>
      </Hidden>

      <Hidden smUp>
        <Row>
          <Col span={3} xs={12} align="start">
            <BestSellerTitle
              cssStyle="productListTile"
              title="Continental PremiumContact™ 6"
            />
          </Col>
          <Col span={3} xs={12} align="end">
            <ModalText styleOverride="prod-list-text" />
          </Col>
          <Col span={3} xs={6} align="middle">
            <ApprovedImage />
          </Col>

          <Col span={3} xs={6} align="middle">
            <Stock index={index} />
          </Col>
          <Col span={3} xs={6} align="middle">
            <Price />
          </Col>
          <Col span={3} xs={6} align="middle">
            <Total />
          </Col>
          <Col span={3} xs={12} align="middle">
            <ProdQty />
          </Col>
          <Col span={3} xs={12} align="middle">
            <AddToCart index={index} />
          </Col>
        </Row>
      </Hidden>
    </Card>
  );
};

export default ProductList;
