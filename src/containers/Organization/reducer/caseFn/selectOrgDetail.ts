import { IOrganizationActions } from 'containers/Organization/types/actions';
import { IOrganizationInitialState } from '..';

const selectOrgDetailCaseFn = (
  state: IOrganizationInitialState,
  action: IOrganizationActions.SelectOrgDetail['WithUuid']
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