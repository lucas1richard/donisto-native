import * as React from 'react';
import { shallow } from 'enzyme';
import TopRow, { TopRowProps } from '..';

describe('<TopRow />', () => {
  const renderComponent = (props: TopRowProps) => shallow(<TopRow {...props} />);
  it('renders', () => {
    expect(renderComponent({
      name: 'mockName'
    })).toMatchSnapshot();
  });
});