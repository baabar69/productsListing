import React from 'react';

import { Row, Col } from 'antd';

import AppLayout from '@components/layout';

import Portfolio from '@screens/dashboard/portfolio';
import Funds from '@screens/dashboard/funds';
import Tokens from '@screens/dashboard/tokens';
import ITO from '@screens/dashboard/ito';

import '@screens/dashboard/dashboard.less';

const Dashboard = () => {
  return (
    <AppLayout>
      <div className="dashboard__wrapper">
        <Row gutter={[25, 25]}>
          <Col md={16} lg={16} xl={16}>
            <Portfolio />
          </Col>
          <Col md={8} lg={8} xl={8}>
            <Funds />
          </Col>
          <Col md={12} lg={12} xl={12}>
            <Tokens />
          </Col>
          <Col md={12} lg={12} xl={12}>
            <ITO />
          </Col>
        </Row>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
