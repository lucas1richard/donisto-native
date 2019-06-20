import { IGetOrgSuccessAction } from 'containers/Organization/actions';
import { IOrganizationInitialState } from '..';

const getOrgSuccessCaseFn = (
  state: IOrganizationInitialState,
  action: IGetOrgSuccessAction
): IOrganizationInitialState => {
  const uuid = action.organization.reduce((memo: any, org: any) => {
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
    organizations: action.organization
  };
};

export default getOrgSuccessCaseFn;