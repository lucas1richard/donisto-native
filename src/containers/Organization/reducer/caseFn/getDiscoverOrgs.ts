const getDiscoverOrgsCaseFn: IOrgCaseFn<null> = (state) => {
  return {
    ...state,
    ui: {
      ...state.ui,
      discoverOrgsLoaded: false
    },
  };
};

export default getDiscoverOrgsCaseFn;