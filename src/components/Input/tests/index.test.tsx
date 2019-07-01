import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Input, { TInputProps } from '..';
import { BlurViewProps } from 'expo';

const defaultProps = {
  meta: {
    autofilled: false,
    asyncValidating: false,
    dirty: false,
    dispatch: jest.fn(),
    form: 'mockForm',
    initial: '',
    invalid: false,
    pristine: true,
    submitting: false,
    submitFailed: false,
    touched: false,
    valid: true,
    visited: false
  },
  input: {
    value: 'mockValue',
    onBlur: jest.fn(),
    onChange: jest.fn(),
    name: 'mockName',
    onDragStart: jest.fn(),
    onDrop: jest.fn(),
    onFocus: jest.fn()
  },
};

describe('<Input />', () => {
  const renderComponent = (props: TInputProps) => shallow(<Input {...props} />);
  it('renders', () => {
    expect(toJson(renderComponent({ ...defaultProps }))).toMatchSnapshot();
  });
  it('renders multiline', () => {
    expect(renderComponent({
      ...defaultProps,
      multiline: true
    })).toMatchSnapshot();
  });
  it('focuses', () => {
    const onFocus = jest.fn();
    const instance = renderComponent({
      ...defaultProps,
      multiline: true,
      input: {
        ...defaultProps.input,
        onFocus
      }
    }).instance() as Input;
    instance.onFocus();
    expect(onFocus).toHaveBeenCalled();
  });
  describe('onBlur instance method', () => {
    it('blurs', () => {
      const onBlur = jest.fn();
      const instance = renderComponent({
        ...defaultProps,
        multiline: true,
        input: {
          ...defaultProps.input,
          onBlur
        }
      }).instance() as Input;
      instance.onBlur();
      expect(onBlur).toHaveBeenCalled();
    });
  });
  describe('blurViewProps', () => {
    it('renders with blurViewProps', () => {
      const blurViewProps: BlurViewProps = {
        tint: 'light',
        intensity: 80
      };
      expect(toJson(renderComponent({
        ...defaultProps,
        blurViewProps
      }))).toMatchSnapshot();
    });
  });
});