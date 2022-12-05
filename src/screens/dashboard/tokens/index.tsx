import React, { useEffect, useState } from 'react';

import { Layout, Tabs, Table, Tag, Typography, Space } from 'antd';

import CustomModal from '@components/custom-modal';

import UpArrowGreen from '@assets/icons/up-arrow-green.svg';
import DownArrowRed from '@assets/icons/down-arrow-red.svg';

import { recomendationtoken } from '@apis/dashboard';

import Menu from '@screens/portfolio/menu';
import NoData from '@components/noData';

const Tokens = () => {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  const { Text } = Typography;

  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showBuyTokenModal, setShowBuyTokenModal] = useState(false);

  const columns = [
    {
      dataIndex: 'token_name',
      key: 'token_name',
      render: (text: string, record: any, index: number) => (
        <div className="dashboard__token">
          <Text type={index % 2 === 0 ? 'success' : 'danger'} className="token__name">
            {text}
          </Text>
          <span>
            <Tag className="dashboard__tag--finance">Finance</Tag>
          </span>
        </div>
      )
    },
    {
      dataIndex: 'quantity',
      key: 'quantity',
      render: (text: string, record: any, index: number) => (
        <Space>
          <div className="token__percentage">{text || '-'}%</div>
          <img src={index % 2 === 0 ? UpArrowGreen : DownArrowRed} alt="successArrow" />
        </Space>
      )
    },

    {
      dataIndex: 'price',
      key: 'price',
      render: (text: string, record: any, index: number) => (
        <Text className="token__name" type={index % 2 === 0 ? 'success' : 'danger'}>
          $ {Number(text).toFixed(3)}
        </Text>
      )
    },

    {
      key: 'buyTag',
      dataIndex: 'buyTag',
      render: () => (
        <Tag className="tab__button" onClick={() => setShowBuyTokenModal(true)}>
          Buy
        </Tag>
        // <Tag className="tab__button">
        //   overlay={<Menu isBuy={true} />} trigger={['click']}Buy
        // </Tag>
      )
    }
  ];

  useEffect(() => {
    const data = async () => {
      try {
        const response = await recomendationtoken();
        setTokens(response?.data?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    data();
  }, []);
  return (
    <Content className="card__wrapper">
      {showBuyTokenModal && (
        <CustomModal>
          <Menu handleClose={setShowBuyTokenModal} isBuy={true} />
        </CustomModal>
      )}
      <Tabs defaultActiveKey="1" className="ant__tabs--top--dashborad">
        <TabPane className="tabs__tab--button" tab="Recomendations" key="1">
          {!tokens?.length && !loading ? (
            <div className="pt__4 pb__8">
              <NoData />
            </div>
          ) : (
            <div className="table__fixed">
              <Table
                className="ant__table--wrapper--dashboard"
                showHeader={false}
                columns={columns}
                loading={loading}
                dataSource={tokens}
                pagination={false}
              />
            </div>
          )}
        </TabPane>
        <TabPane className="tabs__tab--button " tab="Watchlist" key="2">
          {!tokens?.length && !loading ? (
            <div className="pt__4 pb__8">
              <NoData />
            </div>
          ) : (
            <div className="table__fixed">
              <Table
                className="ant__table--wrapper--dashboard"
                showHeader={false}
                columns={columns}
                loading={loading}
                dataSource={tokens}
                pagination={false}
              />
            </div>
          )}
        </TabPane>
      </Tabs>
    </Content>
  );
};

export default Tokens;
