import * as React from 'react';
import { shallow } from 'enzyme';
import LoginLink from '..';

describe('<LoginLink />', () => {
  const renderComponent = () => shallow(<LoginLink />);
  it('renders', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});