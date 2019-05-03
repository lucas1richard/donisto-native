import * as React from 'react';
import { shallow } from 'enzyme';

import { Messages, IMessagesProps } from '../index';

describe('<Messages />', () => {
  const renderComponent = (props: IMessagesProps) => shallow(<Messages {...props} />);
  it('Expect to have unit tests specified', () => {
    expect(renderComponent({})).toMatchSnapshot();
  });
});
