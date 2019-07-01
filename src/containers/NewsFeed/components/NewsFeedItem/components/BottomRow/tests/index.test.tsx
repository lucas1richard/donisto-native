import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BottomRow from '..';

describe('<BottomRow />', () => {
  const renderComponent = () => toJson(shallow(<BottomRow />));
  it('renders', () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});