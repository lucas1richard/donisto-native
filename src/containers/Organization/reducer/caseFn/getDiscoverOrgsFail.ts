const getDiscoverOrgsFailCaseFn: IOrgCaseFn<null> = (state) => {
  return {
    ...state,
    ui: {
      ...state.ui,
      discoverOrgsLoaded: true
    },
  };
};

export default getDiscoverOrgsFailCaseFn;