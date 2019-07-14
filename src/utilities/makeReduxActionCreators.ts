interface GenericAction {
  Default: any;
  Fail: any;
  Success: any;
}

const makeActionCreators = <ActionType extends GenericAction, SuccessDataType>(
  defaultType: ActionType['Default'],
  failType: ActionType['Fail'],
  successType: ActionType['Success']
) => ({
  Default: () => ({
    type: defaultType,
  }),
  Fail: (error: any) => ({
    type: failType,
    error,
  }),
  Success: (data: SuccessDataType) => ({
    type: successType,
    data,
  }),
});

export default makeActionCreators;
