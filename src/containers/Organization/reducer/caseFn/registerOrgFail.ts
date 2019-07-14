import { IOrganizationActions } from 'containers/Organization/types/actions';
import { IOrganizationInitialState } from '..';

const registerOrgFailCaseFn = (
  state: IOrganizationInitialState,
  action: IOrganizationActions.RegisterOrg['Fail']
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