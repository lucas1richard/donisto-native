import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TopRow, { TopRowProps } from '..';

describe('<TopRow />', () => {
  const renderComponent = (props: TopRowProps) => toJson(shallow(<TopRow {...props} />));
  it('renders', () => {
    expect(renderComponent({
      name: 'mockName'
    })).toMatchSnapshot();
  });
});