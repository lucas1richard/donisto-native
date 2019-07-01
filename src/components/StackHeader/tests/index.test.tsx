import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import StackHeader from '..';

describe('<StackHeader />', () => {
  const renderComponent = () => toJson(shallow(<StackHeader />));
  it('renders', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});