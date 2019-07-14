/// <reference types="redux" />

declare interface DonistoAction<
  DefaultType extends redux.Action<string>,
  FailType extends redux.Action<string>,
  SuccessType extends redux.Action<string>,
  SuccessData
> {
  Default: {
    type: DefaultType
  };
  Fail: {
    type: FailType,
    error: any
  };
  Success: {
    type: SuccessType,
    data: SuccessData
  };
}

declare interface DonistoActionCreators<
  DefaultAction extends redux.Action<string>,
  FailAction extends redux.Action<string>,
  SuccessAction extends redux.Action<string>,
  SuccessData
> {
  Default: () => DefaultAction;
  Fail: (error: any) => FailAction;
  Success: (data: SuccessData) => SuccessAction;
}