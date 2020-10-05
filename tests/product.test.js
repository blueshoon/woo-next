import React from 'react';
import { act } from "react-dom/test-utils";
import {cleanup} from '@testing-library/react';
import { shallow } from 'enzyme';
import Product from '../components/Product';

afterEach(cleanup);

const product = {
  id: 100,
  name: 'Tonal (Affirm) + Smart Accessories',
  slug: 'tonal',
  price: '$3,4999'
};

test('it will render without error', () => {
  act(() => {
    shallow( <Product product={product} /> );
  })
})

test('it has correct product', () => {
  act(() => {
    const productHeader = (<h3 className="text-center">Tonal (Affirm) + Smart Accessories</h3>);
    const wrapper = shallow(
        <Product product={product} />
    );
    expect(wrapper.exists('h3.text-center')).toBeTruthy();
    expect(wrapper.contains(productHeader)).toBeTruthy();
  })
})