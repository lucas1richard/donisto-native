import * as React from 'react';
import { shallow } from 'enzyme';
import Card, { ICardProps } from '..';

describe('<Card />', () => {
  const renderComponent = (props: ICardProps) => shallow(<Card {...props} />);
  it('renders with just text', () => {
    expect(renderComponent({ children: 'mockText' })).toMatchSnapshot();
  });
});