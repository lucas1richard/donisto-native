import * as React from 'react';
import { shallow } from 'enzyme';

import { CreateNewsStory, ICreateNewsStoryProps } from '../index';

describe('<CreateNewsStory />', () => {
  const renderComponent = (props: ICreateNewsStoryProps) => shallow(<CreateNewsStory {...props} />);
  it('Expect to have unit tests specified', () => {
    expect(renderComponent({
      status: 'editing',
      submitStory: jest.fn()
    })).toMatchSnapshot();
  });
  // it('something', () =>);
});
