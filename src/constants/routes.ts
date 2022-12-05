import ProductsListing from '@screens/productsListing';
import NewProduct from '@screens/newProduct';


export const PATHS = [
  { exact: true, path: '/', component: ProductsListing  },
  { exact: true, path: '/products', component: ProductsListing },
  { exact: true, path: '/product/new', component: NewProduct },
];
