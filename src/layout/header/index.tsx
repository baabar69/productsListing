import React from 'react';
import { Button, Layout } from 'antd';

import history from '@utils/history';

import './styles.less';

const { Header: PageHeader } = Layout;

const Header = () => {
  const handleRedirect = () => {
    history.push('/product/new');
  };

  return (
    <PageHeader className="container">
      <div className="wrapper">
        <span className="logo">
          <img src="https://img.icons8.com/doodle/2x/duolingo-logo.png" alt="logo" />
          <div className="heading">InnoStark Products Listing</div>
        </span>
        <span className="action-button">
          <Button type="primary" onClick={handleRedirect}>
            Add new Product
          </Button>
        </span>
      </div>
    </PageHeader>
  );
};

export default Header;
