import * as React from 'react';
import { shallow } from 'enzyme';
import StackHeader from '..';

describe('<StackHeader />', () => {
  const renderComponent = () => shallow(<StackHeader />);
  it('renders', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});