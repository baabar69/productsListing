import React, { useEffect, useState } from 'react';

import { Layout, Tabs, Table, Tag, Typography, Tooltip } from 'antd';

import { activeItoSubscriptions, upcomingItoSubscriptions } from '@apis/dashboard';
import NoData from '@components/noData';

const ITO = () => {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  const { Text } = Typography;

  const [upcomingIto, setUpcomingIto] = useState([]);
  const [activeIto, setActiveIto] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      dataIndex: 'ito_name',
      key: 'ito_name',
      render: (text: string, record: any, index: number) => (
        <div className="dashboard__token--ito ">
          <Tooltip title={text}>
            <Text className="token__name--ito">
              {text.length > 20 ? `${text.slice(0, 20)}...` : text}
            </Text>
          </Tooltip>
          <span>
            <Tag className="dashboard__tag--finance">Finance</Tag>
          </span>
        </div>
      )
    },
    {
      dataIndex: 'threshold',
      key: 'threshold',
      render: (text: string, record: any, index: number) => (
        <Text className="token__name--ito">$ {text}</Text>
      )
    },
    {
      key: 'buyTag',
      dataIndex: 'buyTag',
      render: () => <Tag className="tab__button--subscribe">Subscribe</Tag>
    }
  ];

  useEffect(() => {
    const handleIto = async () => {
      try {
        const response = await upcomingItoSubscriptions();
        const res = await activeItoSubscriptions();

        setActiveIto(res?.data?.data);
        setUpcomingIto(response?.data?.data);
        setLoading(false);
      } catch {}
    };
    handleIto();
  }, []);

  return (
    <Content className="card__wrapper">
      <Tabs defaultActiveKey="1" className="ant__tabs--top--dashborad">
        <TabPane className="tabs__tab--button" tab="Upcoming ITO Subscriptions" key="1">
          {!upcomingIto?.length && !loading ? (
            <div className="pt__4 pb__8">
              <NoData />
            </div>
          ) : (
            <div className="table__fixed">
              <Table
                className="ant__table--wrapper--dashboard"
                showHeader={false}
                columns={columns}
                dataSource={upcomingIto}
                pagination={false}
                loading={loading}
              />
            </div>
          )}
        </TabPane>
        <TabPane tab="Active ITO Subscriptions" key="2">
          {!activeIto?.length && !loading ? (
            <div className="pt__4 pb__8">
              <NoData />
            </div>
          ) : (
            <div className="table__fixed">
              <Table
                className="ant__table--wrapper--dashboard"
                showHeader={false}
                columns={columns}
                dataSource={activeIto}
                pagination={false}
                loading={loading}
              />
            </div>
          )}
        </TabPane>
      </Tabs>
    </Content>
  );
};

export default ITO;
