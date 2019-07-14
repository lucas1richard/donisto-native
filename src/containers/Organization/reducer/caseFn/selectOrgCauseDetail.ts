import { IOrganizationInitialState } from '..';
import { IOrganizationActions } from 'containers/Organization/types/actions';

const selectOrgCauseDetailCaseFn = (
  state: IOrganizationInitialState,
  action: IOrganizationActions.SelectOrgCauseDetail['WithUuid']
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