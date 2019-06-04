import { IRegisterOrgFailAction } from 'containers/Organization/actions';
import { IOrganizationInitialState } from '..';

const registerOrgFailCaseFn = (
  state: IOrganizationInitialState,
  action: IRegisterOrgFailAction
) => {
  return {
    ...state,
    ui: {
      ...state.ui,
      loaded: true
    },
    error: action.error
  };
};

export default registerOrgFailCaseFn;