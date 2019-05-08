import { IGetOrgDetailSuccessAction } from 'containers/Organization/actions';
import { IOrganizationInitialState } from '..';

const getOrgDetailSuccessCaseFn = (
  state: IOrganizationInitialState,
  action: IGetOrgDetailSuccessAction
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

export default getOrgDetailSuccessCaseFn;