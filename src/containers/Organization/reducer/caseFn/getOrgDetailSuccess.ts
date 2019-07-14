import { IOrganizationInitialState } from '..';
import { IOrganizationActions } from 'containers/Organization/types/actions';

const getOrgDetailSuccessCaseFn = (
  state: IOrganizationInitialState,
  action: IOrganizationActions.GetOrgDetail['Success']
): IOrganizationInitialState => {
  const { data: organization } = action;
  const existingUuid = state.uuid[organization.uuid] || {};

  const uuid = {
    ...state.uuid,
    [organization.uuid]: {
      ...existingUuid,
      ...organization
    }
  };

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
  };
};

export default getOrgDetailSuccessCaseFn;