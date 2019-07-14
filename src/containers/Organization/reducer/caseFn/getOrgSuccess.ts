import { IOrganizationInitialState } from '..';
import { IOrganizationActions } from 'containers/Organization/types/actions';

const getOrgSuccessCaseFn = (
  state: IOrganizationInitialState,
  action: IOrganizationActions.GetOrg['Success']
): IOrganizationInitialState => {
  const uuid = action.data.reduce((memo: any, org: any) => {
    if (memo[org.uuid]) {
      memo[org.uuid] = {
        ...memo[org.uuid],
        ...org
      };
    } else {
      memo[org.uuid] = org;
    }
    return memo;
  }, {});

  return {
    ...state,
    ui: {
      ...state.ui,
      loaded: true
    },
    uuid: {
      ...state.uuid,
      ...uuid,
    },
    organizations: action.data
  };
};

export default getOrgSuccessCaseFn;