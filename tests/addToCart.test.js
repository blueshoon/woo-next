import React from 'react';
import { act } from "react-dom/test-utils";
import {cleanup} from '@testing-library/react';
import { shallow, render } from 'enzyme';
import AddToCart from '../components/cart/AddToCartButton';
import GET_CART from "../queries/get-cart";
import ADD_TO_CART from "../mutations/add-to-cart";
import { MockedProvider } from '@apollo/client/testing';

afterEach(cleanup);

const product = {
  id: 100,
  productId: 10054,
  name: 'Tonal (Affirm) + Smart Accessories',
  slug: 'tonal',
  price: '$3,4999'
};

const mocks = [
  {
    request: {
      query: GET_CART,
    },
    result: {
      data: {
        cart: {
          content: {
            nodes: [
              {
                id: 100,
                productId: 10054,
                key: 555,
                name: 'Tonal',
                quantity: 1,
                slug: 'tonal',
                total: '34999',
                image: {
                  sourceUrl: 'https://via.placeholder.com/200',
                  srcSet: '',
                  title: 'tonal',
                },
              },
            ],
          },
        },
      },
    },
  },
]

test('it will render without error', () => {
  act(() => {
    shallow( 
      <MockedProvider mocks={mocks} addTypename={false}>
        <AddToCart product={product} />
      </MockedProvider> );
  })
})

test('it has correct button text', () => {
  act(() => {
    const productHeader = (<h3 className="text-center">Tonal (Affirm) + Smart Accessories</h3>);
    const button = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AddToCart product={product} />
      </MockedProvider>
    );
    expect(button.text()).toEqual(expect.stringContaining('Start Order'));
  })
})