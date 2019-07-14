declare interface DonistoCaseFn<InitialState, ActionType> {
  (state: InitialState, action: ActionType): InitialState;
}