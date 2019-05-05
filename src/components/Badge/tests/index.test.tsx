import * as React from 'react';
import { shallow } from 'enzyme';
import Badge, { IBadgeProps } from '..';

describe('<Badge />', () => {
  const renderComponent = (props: IBadgeProps) => shallow(<Badge {...props} />);
  it('renders', () => {
    expect(renderComponent({
      label: 'mockLabel'
    })).toMatchSnapshot();
  });
});