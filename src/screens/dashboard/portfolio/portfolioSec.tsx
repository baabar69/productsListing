import React from 'react';

import { Space, Typography } from 'antd';

type Props = {
  title: string;
  image?: any;
  value: string;
  color?: boolean;
};

const PortfolioSec = ({ title, image, value, color }: Props) => {
  const { Text } = Typography;
  return (
    <>
      <Text className="current__value--text">{title}</Text>
      <div className="other__values">
        <Space>
          <Text type={color ? 'success' : 'secondary'} className={!color ? 'other__values' : ''}>
            {value}
          </Text>
          {image && <img src={image} alt="upArrow" />}
        </Space>
      </div>
    </>
  );
};
export default PortfolioSec;
