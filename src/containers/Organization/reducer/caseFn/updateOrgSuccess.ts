import { IOrganizationActions } from 'containers/Organization/types/actions';
import { IOrganizationInitialState } from '..';

const updateOrgSuccessCaseFn = (
  state: IOrganizationInitialState,
  action: IOrganizationActions.UpdateOrg['Success']
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
    uuid,
  };
};

export default updateOrgSuccessCaseFn;