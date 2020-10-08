import React from 'react';
import { act } from "react-dom/test-utils";
import { cleanup } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import SalesAgent from '../components/SalesAgent';

afterEach(cleanup);

const agents = [
  {
    databaseId: '01',
    email: 'nobody@nowhere.net'
  },
  {
    databaseId: '02',
    email: 'noone@nowhere.net'
  },
];

test('it will render without error', () => {
  act(() => {
    shallow( <SalesAgent agents={agents} /> );
  })
})

test('it will render agents[children] with radio buttons', () => {
  act(() => {
    const salesComponent = shallow(<SalesAgent agents={agents}/>);
    expect( salesComponent.exists('input[type="radio"]') ).toBeTruthy();
  })
})

test('it will render multiple agents[children] with radio buttons', () => {
  act(() => {
    const salesComponent = mount(<SalesAgent agents={agents}/>);
    expect( salesComponent.find('input[type="radio"]').length ).toEqual(2);
  })
})