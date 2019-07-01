import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Card, { ICardProps } from '..';

describe('<Card />', () => {
  const renderComponent = (props: ICardProps) => toJson(shallow(<Card {...props} />));
  it('renders with just text', () => {
    expect(renderComponent({ children: 'mockText' })).toMatchSnapshot();
  });
});