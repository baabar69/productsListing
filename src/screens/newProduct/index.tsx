import React, { useState } from 'react';

import { Button, Form, Input, notification } from 'antd';

import history from '@utils/history';

import '@screens/newProduct/newProduct.less';
import { isNullish } from '@utils/helpers';

type NotificationType = 'success' | 'error';

const NewProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    inventoryDate: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (isNullish(product))
      return openNotificationWithIcon('error', 'Error', 'Please enter all fields');

    const allProducts = JSON.parse(localStorage.getItem('products') as string);

    localStorage.setItem('products', JSON.stringify([...(allProducts || []), product]));

    openNotificationWithIcon('success', 'Success', 'product has been added!');

    setTimeout(() => history.push('/products'), 2000);
  };

  const openNotificationWithIcon = (
    type: NotificationType,
    message: string,
    description: string
  ) => {
    api[type]({
      message,
      description
    });
  };

  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  return (
    <div className="new-product-container">
      {contextHolder}
      <Form className="product-form" form={form} action="" onFinish={handleSubmit}>
        <Input addonBefore="Name" name="name" onChange={handleChange} />
        <Input addonBefore="Description" name="description" onChange={handleChange} />
        <Input addonBefore="Price" name="price" onChange={handleChange} />
        <Input addonBefore="Inventory date" name="inventoryDate" onChange={handleChange} />

        <Button className="action-button" onClick={handleSubmit} type="primary">
          Add product
        </Button>
      </Form>
    </div>
  );
};

export default NewProduct;
