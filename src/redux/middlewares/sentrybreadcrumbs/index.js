import Sentry from 'sentry-expo';
import { UPDATE_ACCOUNT_ROUTING } from 'containers/Plaid/constants';

const sentrybreadcrumbs = () => (next) => (action) => {
  const notReduxFormChange = action.type !== '@@redux-form/CHANGE';
  const notRouting = action.type !== 'app/Navigation/NavigateWithRedux';
  if (action.type && notReduxFormChange && notRouting) {
    if (action.type === UPDATE_ACCOUNT_ROUTING) {
      Sentry.captureBreadcrumb({
        message: 'From Middleware',
        category: 'naive capture',
        data: {
          ...action,
          data: '[Filtered]'
        }
      });
    } else {
      Sentry.captureBreadcrumb({
        message: 'From Middleware',
        category: 'naive capture',
        data: action
      });
    }
  }
  const result = next(action);
  return result;
};

export default sentrybreadcrumbs;
