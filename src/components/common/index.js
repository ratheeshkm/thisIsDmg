import React from 'react';
import WheelImage from '../../images/wheel.png';
import AdvImage from '../../images/adv.png';
import Approved from '../../images/approved.png';
import {
  CheckCircleFilled,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import ProdQty from './ProdQty';
import { Button } from 'antd';
import CartIcon from '../../images/add-to-cart-button.png';
import BellIcon from '../../images/add-to-cart-bell.png';

const BestSellerImg = () => {
  return (
    <div className="best-seller">
      <img src={WheelImage} className="wheel" alt="wheel" />
      <img src={AdvImage} className="adv" alt="adv" />
    </div>
  );
};

const BestSellerTitle = ({ cssStyle, title }) => {
  return <div className={`title ${cssStyle}`}>{title}</div>;
};

const ApprovedImage = () => {
  return (
    <div className="approved">
      <img src={Approved} alt="approved" />
    </div>
  );
};

const ModalText = ({ styleOverride }) => {
  return (
    <div className={`modal-text ${styleOverride}`}>
      <div>205/55 R16 H</div>
      <div>SUV</div>
    </div>
  );
};

const Stock = ({ index }) => {
  return (
    <div className="stock">
      Stock {''}
      {index === 0 && <CheckCircleFilled style={{ color: 'green' }} />}
      {index === 1 && (
        <span>
          <ExclamationCircleOutlined style={{ color: '#ffa500' }} />
          <div>
            <b>8 Tires Left</b>
          </div>
        </span>
      )}
      {index === 2 && (
        <span>
          <CloseCircleOutlined style={{ color: 'red' }} />
          <div style={{ color: 'red' }}>
            <b>Back in 1 week</b>
          </div>
        </span>
      )}
    </div>
  );
};

const Price = () => {
  return (
    <div className="price">
      Price <span>&#8362;</span>340
    </div>
  );
};

const Total = ({ styleOverride }) => {
  return (
    <div className={`total ${styleOverride}`}>
      Total{' '}
      <span className="total-price">
        <span>&#8362;</span>1,360
      </span>
    </div>
  );
};

const AddToCart = ({ index }) => {
  return (
    <div>
      {(index === 0 || index === 1 || !index) && (
        <div className="input-group addtocart">
          <Button
            type="primary"
            shape="round"
            icon={<img src={CartIcon} alt="Prod" />}
            size="large"
          >
            Add to Cart
          </Button>
        </div>
      )}
      {index === 2 && (
        <div className="input-group addtocart notify">
          <Button
            type="primary"
            shape="round"
            icon={<img src={BellIcon} alt="Prod" />}
            size="large"
          >
            Notify Me!
          </Button>
        </div>
      )}
    </div>
  );
};

export {
  BestSellerImg,
  BestSellerTitle,
  ApprovedImage,
  ModalText,
  Stock,
  Price,
  Total,
  ProdQty,
  AddToCart,
};
