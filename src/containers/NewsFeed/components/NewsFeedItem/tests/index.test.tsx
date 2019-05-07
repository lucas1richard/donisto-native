import * as React from 'react';
import { shallow } from 'enzyme';
import NewsFeedItem, { INewsFeedItemProps } from '..';

describe('<NewsFeedItem />', () => {
  const renderComponent = (props: INewsFeedItemProps) => shallow(<NewsFeedItem {...props} />);
  it('renders', () => {
    expect(renderComponent({
      item: {
        organization: {
          name: 'mockOrgName'
        }
      },
      img: 'mockImage',
      navDetail: jest.fn()
    })).toMatchSnapshot();
  });
});