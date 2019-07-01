import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Badge, { IBadgeProps } from '..';

describe('<Badge />', () => {
  const renderComponent = (props: IBadgeProps) => toJson(shallow(<Badge {...props} />));
  it('renders', () => {
    expect(renderComponent({
      label: 'mockLabel'
    })).toMatchSnapshot();
  });
});