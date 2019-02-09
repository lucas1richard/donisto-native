import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import theme from 'theme/iftheme';

export const style = {
  wrapper: {
    backgroundColor: '#fff',
    width: '100%'
  },
  errortrue: error(true),
  errorfalse: error(false),
  fieldLabel: fieldLabel(),
  fieldLabelerror: fieldLabel({ color: theme.red }),
  fieldLabelvalid: fieldLabel({ color: theme.green }),
  fieldLabelactive: fieldLabel({ color: theme.darkBlue }),
  textInputWrapper: textInputWrapper({ borderColor: theme.pristineInputGray }),
  textInputWrappererror: textInputWrapper({ borderColor: theme.red }),
  textInputWrappervalid: textInputWrapper({ borderColor: theme.green }),
  textInputWrapperactive: textInputWrapper({ borderColor: theme.darkBlue }),
  inputStyle: inputStyle(),
  inputStyleerror: inputStyle({ color: theme.red }),
  inputStylevalid: inputStyle({ color: theme.green }),
  inputStyleactive: inputStyle({ color: theme.darkBlue })
};

export default StyleSheet.create(style);

function inputStyle(addStyle = {}): TextStyle {
  return {
    width: '100%',
    color: theme.darkGray,
    position: 'relative',
    padding: 12,
    fontFamily: 'proxima-soft-regular',
    fontWeight: '300',
    height: 120,
    fontSize: 18,
    marginTop: -35,
    ...addStyle
  };
}

function textInputWrapper(addStyle = {}): ViewStyle {
  return {
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.darkGray,
    backgroundColor: '#fff',
    width: '100%',
    height: 50,
    overflow: 'hidden',
    ...addStyle
  };
}

/** The input label */
function fieldLabel(addStyle = {}): TextStyle {
  return ({
    color: theme.darkGray,
    backgroundColor: 'rgba(0,0,0,0)',
    marginBottom: 3,
    fontWeight: '300',
    fontSize: 12,
    ...addStyle
  });
}

/**
 * Error text style
 */
function error(err: boolean): TextStyle {
  return {
    color: theme.red,
    fontSize: 12,
    height: 16,
    opacity: err ? 1 : 0
  };
}
