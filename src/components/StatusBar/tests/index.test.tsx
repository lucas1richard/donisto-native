import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import StatusBar from '..';

describe('<StatusBar />', () => {
  const renderComponent = () => toJson(shallow(<StatusBar />));
  it('renders', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});