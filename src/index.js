import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import Routes from './routes';
import { Layout } from 'antd';

import { Provider } from 'react-redux';
import { configureStore } from './store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Layout className="layout">
      <Routes />
    </Layout>
  </Provider>,
  document.getElementById('root')
);
