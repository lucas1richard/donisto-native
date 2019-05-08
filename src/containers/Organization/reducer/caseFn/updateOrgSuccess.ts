import { IUpdateOrgSuccessAction } from 'containers/Organization/actions';
import { IOrganizationInitialState } from '..';

const updateOrgSuccessCaseFn = (
  state: IOrganizationInitialState,
  action: IUpdateOrgSuccessAction
): IOrganizationInitialState => {
  const { organization } = action;
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