import React from 'react';
import { shallow } from 'enzyme';
// import { fromJS } from 'immutable';
// import toJson from 'enzyme-to-json';
import FieldPrimitive from '../FieldPrimitive';

describe('FieldPrimitive', () => {
  const renderedComponent = (props = {}) => shallow(<FieldPrimitive {...props} />);

  describe('classMethods', () => {
    const props = {};

    describe('onBlur', () => {
      it('has an onBlur method', () => {
        const component = renderedComponent(props).instance();
        expect(typeof component.onBlur).toEqual('function');
      });

      it('calls input.onBlur', () => {
        const prop = {
          input: { onBlur: jest.fn() }
        };
        const component = renderedComponent(prop).instance();
        component.onBlur();
        expect(prop.input.onBlur).toHaveBeenCalled();
      });

      it('doesn\'t call input.onBlur', () => {
        const prop = {
          noToast: true,
          meta: {
            error: ['error']
          }
        };
        const component = renderedComponent(prop).instance();
        component.onBlur();
      });
    });

    describe('onFocus', () => {
      it('has an onFocus method', () => {
        const component = renderedComponent(props).instance();
        expect(typeof component.onFocus).toEqual('function');
      });

      it('calls input.onFocus', () => {
        const prop = {
          input: { onFocus: jest.fn() }
        };
        const component = renderedComponent(prop).instance();
        component.onFocus();
        expect(prop.input.onFocus).toHaveBeenCalled();
      });
    });

    describe('styleKeys', () => {
      it('has a styleKeys method', () => {
        const component = renderedComponent(props).instance();
        expect(typeof component.styleKeys).toEqual('function');
      });

      it('returns \'\' keys', () => {
        const prop = {
          input: {
            onFocus: jest.fn(),
            value: '1234'
          },
          meta: {}
        };
        const component = renderedComponent(prop).instance();
        const keys = component.styleKeys();
        expect(keys.fieldLabelKey).toEqual('fieldLabel');
        expect(keys.inputStyleKey).toEqual('inputStyle');
        expect(keys.textInputWrapperKey).toEqual('textInputWrapper');
      });

      it('returns \'valid\' keys', () => {
        const prop = {
          input: {
            onFocus: jest.fn(),
            value: '1234'
          },
          meta: {
            valid: true,
            touched: true
          }
        };
        const component = renderedComponent(prop).instance();
        const keys = component.styleKeys();
        expect(keys.fieldLabelKey).toEqual('fieldLabelvalid');
        expect(keys.inputStyleKey).toEqual('inputStylevalid');
        expect(keys.textInputWrapperKey).toEqual('textInputWrappervalid');
      });

      it('returns \'active\' keys', () => {
        const prop = {
          input: {
            onFocus: jest.fn(),
            value: '1234'
          },
          meta: {
            valid: true,
            touched: true,
            active: true
          }
        };
        const component = renderedComponent(prop).instance();
        const keys = component.styleKeys();
        expect(keys.fieldLabelKey).toEqual('fieldLabelactive');
        expect(keys.inputStyleKey).toEqual('inputStyleactive');
        expect(keys.textInputWrapperKey).toEqual('textInputWrapperactive');
      });

      it('returns \'error\' keys', () => {
        const prop = {
          input: {
            onFocus: jest.fn(),
            value: '1234'
          },
          meta: {
            invalid: true,
            touched: true,
            error: '1234'
          }
        };
        const component = renderedComponent(prop).instance();
        const keys = component.styleKeys();
        expect(keys.fieldLabelKey).toEqual('fieldLabelerror');
        expect(keys.inputStyleKey).toEqual('inputStyleerror');
        expect(keys.textInputWrapperKey).toEqual('textInputWrappererror');
      });


      it('returns keys', () => {
        const prop = {
          input: {
            onFocus: jest.fn(),
            value: '1234'
          },
          validateAtLength: 4,
          meta: {
            invalid: true,
            touched: true,
            error: '1234'
          }
        };
        const component = renderedComponent(prop).instance();
        const keys = component.styleKeys();
        expect(keys.fieldLabelKey).toEqual('fieldLabelerror');
        expect(keys.inputStyleKey).toEqual('inputStyleerror');
        expect(keys.textInputWrapperKey).toEqual('textInputWrappererror');
      });
    });
  });
});
