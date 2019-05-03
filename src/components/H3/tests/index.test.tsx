import * as React from 'react';
import { shallow } from 'enzyme';
import H3, { IH3Props } from '..';

describe('<H3 />', () => {
  const renderComponent = (props: IH3Props) => shallow(<H3 {...props} />);
  it('renders with just text', () => {
    expect(renderComponent({ children: 'mockText' })).toMatchSnapshot();
  });
  it('renders with a color prop', () => {
    expect(renderComponent({
      children: 'mockText',
      color: 'light',
    })).toMatchSnapshot();
  });
});