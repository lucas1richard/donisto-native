import * as React from 'react';
import { shallow } from 'enzyme';

import Discover,  { IDiscoverProps } from '../index';

describe('<Discover />', () => {
  const renderComponent = (props: IDiscoverProps) => shallow(<Discover {...props} />);
  it('Expect to have unit tests specified', () => {
    expect(renderComponent({})).toMatchSnapshot();
  });
});
