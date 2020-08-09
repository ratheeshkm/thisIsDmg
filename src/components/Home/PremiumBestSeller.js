import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import {
  BestSellerImg,
  BestSellerTitle,
  ApprovedImage,
  ModalText,
  Stock,
  Price,
  Total,
  ProdQty,
} from '../common';
import CartIcon from '../../images/add-to-cart-button.png';
import Hidden from '@material-ui/core/Hidden';

const PremiumBestSeller = ({ category }) => {
  return (
    <Card className="site-card-wrapper">
      <div className="tag">{category} Bestseller</div>
      <Row>
        <Col span={6}>
          <BestSellerImg />
        </Col>
        <Col span={18}>
          <Row>
            <Col span={24}>
              <BestSellerTitle title="Continental - Contiecocontact 5" />
            </Col>
          </Row>
          <Row>
            <Col span={6} xs={12} md={6}>
              <ApprovedImage />
            </Col>
            <Col span={6} xs={12} md={6}>
              <ModalText />
            </Col>
            <Col span={6} xs={12} md={6}>
              <Stock />
              <Price />
            </Col>
            <Col span={6}>
              <Total />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <ProdQty />
            </Col>
            <Col span={12}>
              <div className="input-group addtocart">
                <Button
                  type="primary"
                  shape="round"
                  icon={<img src={CartIcon} alt="CartIcon" />}
                  size="large"
                >
                  <Hidden smDown>Add to Cart</Hidden>
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default PremiumBestSeller;
