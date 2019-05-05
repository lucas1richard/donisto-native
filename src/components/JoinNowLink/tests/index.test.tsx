import * as React from 'react';
import { shallow } from 'enzyme';
import JoinNow from '..';

describe('<JoinNow />', () => {
  const renderComponent = () => shallow(<JoinNow />);
  it('renders', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});