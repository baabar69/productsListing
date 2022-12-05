import React, { useEffect, useState } from 'react';

import { Layout, Typography, Row, Col, Divider, Space } from 'antd';

import UpArrowGreenIcon from '@assets/icons/up-arrow-green.svg';
import PortfolioSec from '@screens/dashboard/portfolio/portfolioSec';

import { getInvestedValue } from '@apis/dashboard';
import NoData from '@components/noData';
import Loader from '@components/Loader';

function Portfolio() {
  const { Content } = Layout;
  const { Text } = Typography;

  const [value, setValue] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tokenvalue = async () => {
      let response = await getInvestedValue();
      setValue(response?.data);
      setLoading(false);
    };

    tokenvalue();
  }, []);

  return (
    <Content className="card__wrapper">
      <Row align="top" justify="space-between">
        <Col>
          <Text className="portfolio__heading">Portfolio</Text>
        </Col>
        <Col>
          <Text type="secondary" className="time__stamp">
            Last updated: 11:15 am, 2 Feb 2021
          </Text>
        </Col>
      </Row>
      {loading ? (
        <div className="funds__loader">
          <Loader size="large" />
        </div>
      ) : !(value?.invested_value || value?.sum) ? (
        <div className="ptb__2">
          <NoData />
        </div>
      ) : (
        <Row gutter={10} align="bottom" justify="space-between" className="summary__wrapper">
          <>
            <Space
              size={26}
              split={<Divider type="vertical" className="box__divider" />}
              align="end"
            >
              <Col className="today__wrapper">
                <Text className="today__heading">Today’s P&L</Text>
                <Space size="small" align="center">
                  <Text type={'success'} className="today__dollar">
                    $ -<span className="today__percentage">- %</span>
                  </Text>
                </Space>
              </Col>

              <>
                <Col className="today__wrapper">
                  <PortfolioSec
                    title={'Current Value'}
                    image={UpArrowGreenIcon}
                    value={'$ -'}
                    color={true}
                  />
                </Col>
                <Col className="today__wrapper">
                  <PortfolioSec
                    title={'Invested Value'}
                    image={''}
                    value={`$ ${value?.invested_value.toFixed(3) || 0}`}
                    color={false}
                  />
                </Col>
                <Col className="today__wrapper">
                  <PortfolioSec
                    title={'Invested Tokens'}
                    image={''}
                    value={value?.sum}
                    color={false}
                  />
                </Col>
              </>
            </Space>
          </>
        </Row>
      )}
    </Content>
  );
}

export default Portfolio;
