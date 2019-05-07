import * as React from 'react';
import { shallow } from 'enzyme';
import NewsFeedContact, { NewsFeedContactProps } from '..';

describe('<NewsFeedContact />', () => {
  const renderComponent = (props: NewsFeedContactProps) => shallow(<NewsFeedContact {...props} />);
  it('renders', () => {
    expect(renderComponent({
      name: 'mockText'
    })).toMatchSnapshot();
  });
});