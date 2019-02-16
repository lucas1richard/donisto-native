import theme from 'theme/iftheme';
// import { window } from 'utilities/globals';

export const defaultStyles = {
  style: {
    backgroundColor: theme.white,
    shadowColor: '#000000',
    shadowRadius: 6,
    shadowOpacity: 0.16,
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 4
  },
  textStyle: {
    color: '#000000'
  }
};

export const errorStyles = {
  style: {
    backgroundColor: theme.white,
    shadowColor: '#000000',
    shadowRadius: 6,
    shadowOpacity: 0.16,
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 4
  },
  textStyle: {
    color: theme.new.red
  }
};

export default {
  style: {
    backgroundColor: theme.white,
    shadowColor: '#000000',
    shadowRadius: 6,
    shadowOpacity: 0.16,
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 4
  },
  textStyle: {
    // fontFamily: 'proxima-soft-regular',
    color: theme.new.red
    // fontSize: window.scale >= 5 ? 12 : undefined
  }
};
