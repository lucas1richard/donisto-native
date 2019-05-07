import * as React from 'react';
import { shallow } from 'enzyme';
import Donation, { IDonationProps } from '..';

describe('<Donation />', () => {
  const renderComponent = (props: IDonationProps) => shallow(<Donation {...props} />);
  it('renders with just text', () => {
    expect(renderComponent({ title: 'mockTitle' })).toMatchSnapshot();
  });
});