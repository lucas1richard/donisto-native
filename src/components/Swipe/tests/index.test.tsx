import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Swipe from '..';

describe('<Swipe />', () => {
  const renderComponent = () => toJson(shallow(<Swipe />));
  it('renders', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});