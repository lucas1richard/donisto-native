import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button, { IButtonProps } from '..';

describe('<Button />', () => {
  const renderComponent = (props: IButtonProps) => toJson(shallow(<Button {...props} />));
  it('renders with a title', () => {
    expect(renderComponent({
      title: 'mockTitle',
      onPress: jest.fn()
    })).toMatchSnapshot();
  });
  it('renders with a primary color', () => {
    expect(renderComponent({
      title: 'mockTitle',
      color: 'primary',
      variant: 'text',
      onPress: jest.fn()
    })).toMatchSnapshot();
  });
  it('renders with a secondary color', () => {
    expect(renderComponent({
      title: 'mockTitle',
      color: 'secondary',
      variant: 'text',
      onPress: jest.fn()
    })).toMatchSnapshot();
  });
  it('renders with a text variant', () => {
    expect(renderComponent({
      title: 'mockTitle',
      variant: 'text',
      onPress: jest.fn()
    })).toMatchSnapshot();
  });
  it('renders with a contained variant', () => {
    expect(renderComponent({
      title: 'mockTitle',
      variant: 'text',
      onPress: jest.fn()
    })).toMatchSnapshot();
  });
  it('renders with a outlined variant', () => {
    expect(renderComponent({
      title: 'mockTitle',
      variant: 'text',
      onPress: jest.fn()
    })).toMatchSnapshot();
  });
  it('renders with a rounded variant', () => {
    expect(renderComponent({
      title: 'mockTitle',
      variant: 'text',
      onPress: jest.fn()
    })).toMatchSnapshot();
  });
  it('renders a loader', () => {
    expect(renderComponent({
      title: 'mockTitle',
      onPress: jest.fn(),
      showLoader: true,
    })).toMatchSnapshot();
  });
  it('renders with an icon', () => {
    expect(renderComponent({
      title: 'mockTitle',
      onPress: jest.fn(),
      icon: 'mockIcon',
    })).toMatchSnapshot();
  });
});