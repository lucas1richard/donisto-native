interface IOrgCaseFn<TAction> {
  (state: IOrganizationInitialState, action?: TAction): IOrganizationInitialState
}