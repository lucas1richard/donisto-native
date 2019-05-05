import * as React from 'react';
import { shallow } from 'enzyme';
import StatusBar from '..';

describe('<StatusBar />', () => {
  const renderComponent = () => shallow(<StatusBar />);
  it('renders', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});