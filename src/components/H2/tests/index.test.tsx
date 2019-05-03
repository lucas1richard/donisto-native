import * as React from 'react';
import { shallow } from 'enzyme';
import H2, { IH2Props } from '..';

describe('<H2 />', () => {
  const renderComponent = (props: IH2Props) => shallow(<H2 {...props} />);
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