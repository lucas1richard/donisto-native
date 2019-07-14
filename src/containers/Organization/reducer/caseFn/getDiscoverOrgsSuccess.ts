import { IOrganizationActions } from 'containers/Organization/types/actions';

const getDiscoverOrgsSuccessCaseFn: IOrgCaseFn<IOrganizationActions.GetDiscoverOrgs['Success']> = (state, action) => {
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
      discoverOrgsLoaded: true
    },
    uuid: {
      ...state.uuid,
      ...uuid,
    },
    discoverOrgs: action.data.map((org) => org.uuid),
  };
};

export default getDiscoverOrgsSuccessCaseFn;