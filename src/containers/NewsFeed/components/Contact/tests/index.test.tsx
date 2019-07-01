import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NewsFeedContact, { NewsFeedContactProps } from '..';

describe('<NewsFeedContact />', () => {
  const renderComponent = (props: NewsFeedContactProps) => toJson(shallow(<NewsFeedContact {...props} />));
  it('renders', () => {
    expect(renderComponent({
      name: 'mockText'
    })).toMatchSnapshot();
  });
});