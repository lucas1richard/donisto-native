import * as React from 'react';
import { shallow } from 'enzyme';
import Logo from '..';

describe('<Logo />', () => {
  const renderComponent = () => shallow(<Logo />);
  it('renders', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});