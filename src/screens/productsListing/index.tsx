import React from 'react';

import { Button, Card } from 'antd';

import history from '@utils/history';

import '@screens/productsListing/productsListing.less';

const { Meta } = Card;

const ProductsListing = () => {
  const products = JSON.parse(localStorage.getItem('products') as string) || [];

  const handleRedirect = () => {
    history.push('/product/new');
  };

  return (
    <div className="container">
      <div className="listing-wrapper">
        {products?.length === 0 ? (
          <div className="no-products">
            <h2> No products found</h2>
            <Button type="primary" onClick={handleRedirect}>
              Add a new Product
            </Button>
          </div>
        ) : (
          <>
            {products.map((product: IProduct) => (
              <div className="card-wrapper" key={product.name}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://via.placeholder.com/350x250" />}
                >
                  <Meta title={product.name} description={product.description} />
                  <Meta description={`Price: ${product.price}`} />
                  <Meta description={`Inventory Date: ${product.inventoryDate}`} />
                </Card>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsListing;
