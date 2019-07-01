import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Messages, IMessagesProps } from '../index';

describe('<Messages />', () => {
  const renderComponent = (props: IMessagesProps) => toJson(shallow(<Messages {...props} />));
  it('Expect to have unit tests specified', () => {
    expect(renderComponent({})).toMatchSnapshot();
  });
});
