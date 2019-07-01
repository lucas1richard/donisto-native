import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Logo from '..';

describe('<Logo />', () => {
  const renderComponent = () => toJson(shallow(<Logo />));
  it('renders', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});