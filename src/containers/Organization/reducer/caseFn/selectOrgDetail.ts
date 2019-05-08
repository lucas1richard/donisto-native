import { IOrganizationInitialState } from '..';
import { ISelectOrgDetailAction } from 'containers/Organization/actions';

const selectOrgDetailCaseFn = (
  state: IOrganizationInitialState,
  action: ISelectOrgDetailAction
  ): IOrganizationInitialState => {
  return {
    ...state,
    ui: {
      ...state.ui,
      detailUuid: action.uuid
    }
  };
};

export default selectOrgDetailCaseFn;