import React from 'react';
import { act } from "react-dom/test-utils";
import {cleanup} from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import PRODUCTS_QUERY from '../queries/products-only';
import Index from '../pages/index';

const mocks = [
  {
    request: {
      query: PRODUCTS_QUERY,
    },
    result: {
      data: {
        products: {
          nodes: [
            {
              id: 100,
              name: 'Tonal',
              slug: 'tonal',
              price: '$3,4999'
            },
          ],
        },
      },
    },
  },
]

let container = null;

afterEach(cleanup);

test('renders without error', () => {
  act(() => {
      const index = shallow(
        <MockedProvider mocks={mocks} addTypename={false}>
        <Index/>
      </MockedProvider>
    );
  })
});
