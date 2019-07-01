import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Donation, { IDonationProps } from '..';

describe('<Donation />', () => {
  const renderComponent = (props: IDonationProps) => toJson(shallow(<Donation {...props} />));
  it('renders with just text', () => {
    expect(renderComponent({ title: 'mockTitle' })).toMatchSnapshot();
  });
});