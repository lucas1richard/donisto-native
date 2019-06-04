import { IOrganizationInitialState } from '..';

const registerOrgCaseFn = (state: IOrganizationInitialState) => {
  return {
    ...state,
    ui: {
      ...state.ui,
      loaded: false
    }
  };
};

export default registerOrgCaseFn;