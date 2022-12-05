import React from 'react';
import ReactDOM from 'react-dom';
import NewProduct from './index';
import { screen } from '@testing-library/react';

describe(' Product listing Component', () => {
  it('should render componnet', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewProduct />, div);

    screen.debug();
    ReactDOM.unmountComponentAtNode(div);
  });
});
