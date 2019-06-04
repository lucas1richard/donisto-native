import { IOrganizationInitialState } from '..';
import { ISelectOrgCauseDetailAction } from 'containers/Organization/actions';

const selectOrgCauseDetailCaseFn = (
  state: IOrganizationInitialState,
  action: ISelectOrgCauseDetailAction
  ): IOrganizationInitialState => {
  return {
    ...state,
    ui: {
      ...state.ui,
      detailCauseUuid: action.uuid
    }
  };
};

export default selectOrgCauseDetailCaseFn;