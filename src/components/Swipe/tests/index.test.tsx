import * as React from 'react';
import { shallow } from 'enzyme';
import Swipe from '..';

describe('<Swipe />', () => {
  const renderComponent = () => shallow(<Swipe />);
  it('renders', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});