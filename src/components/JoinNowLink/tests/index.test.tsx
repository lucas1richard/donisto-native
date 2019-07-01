import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import JoinNow from '..';

describe('<JoinNow />', () => {
  const renderComponent = () => toJson(shallow(<JoinNow />));
  it('renders', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});