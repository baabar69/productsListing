import React, { useEffect } from 'react';

import { Layout, Typography, Row, Col } from 'antd';

import { fetchGetFundDetails } from '@redux/actions/dashboard';
import { useDispatch, useSelector } from 'react-redux';
import NoData from '@components/noData';
import Loader from '@components/Loader';

const Funds = () => {
  const { Content } = Layout;
  const { Text } = Typography;

  const dispatch = useDispatch();

  const availableCash = useSelector((state: IReducerStates) =>
    state?.dashboard?.availableCash?.fiat_balances?.toFixed(3)
  );

  const cashLoading = useSelector(
    (state: IReducerStates) => state?.dashboard?.availableCashLoading
  );

  useEffect(() => {
    dispatch(fetchGetFundDetails());
  }, [dispatch]);

  return (
    <Content className="card__wrapper">
      <Row align="top" justify="space-between">
        <Col>
          <Text className="portfolio__heading">Funds</Text>
        </Col>
        <Col>
          <Text type="secondary" className="time__stamp">
            Last updated: 11:15 am, 2 Feb 2021
          </Text>
        </Col>
      </Row>

      {cashLoading ? (
        <div className="funds__loader">
          <Loader size="large" />
        </div>
      ) : !availableCash ? (
        <div className="ptb__2">
          <NoData />
        </div>
      ) : (
        <Row gutter={10} align="middle" justify="space-between" className="summary__wrapper">
          <Col className="today__wrapper">
            <Text className="today__heading">Available Cash</Text>
            <Text className="today__dollar">$ {availableCash || 0} </Text>
          </Col>
          <Col className="today__wrapper">
            <Text className="funds__details--heading ">Funds Used Today</Text>
            <Text className="funds__details--value">$ -</Text>
            <Text className="funds__details--heading ">Opening Balance</Text>
            <Text className="funds__details--value">$ -</Text>
          </Col>
        </Row>
      )}
    </Content>
  );
};

export default Funds;
