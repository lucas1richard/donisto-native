import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Screen from '..';

describe('<Screen />', () => {
  const renderComponent = () => toJson(shallow(<Screen />));
  it('renders', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});