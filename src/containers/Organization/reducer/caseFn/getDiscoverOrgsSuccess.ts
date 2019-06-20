import { IGetDiscoverOrgsSuccessAction } from 'containers/Organization/actions';

const getDiscoverOrgsSuccessCaseFn: IOrgCaseFn<IGetDiscoverOrgsSuccessAction> = (state, action) => {
  const uuid = action.organizations.reduce((memo: any, org: any) => {
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
    discoverOrgs: action.organizations.map((org) => org.uuid),
  };
};

export default getDiscoverOrgsSuccessCaseFn;