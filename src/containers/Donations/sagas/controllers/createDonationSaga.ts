import { call, put, select, all} from 'redux-saga/effects';
import { getFormValues } from 'redux-form';
import api from 'utilities/api';
  import {
    createDonationSuccessAction,
    createDonationFailAction,
    getDonationsAction
  } from 'containers/Donations/actions';
import { CREATE_DONATION_FORM } from 'containers/Donations/containers/CreateDonation/Form';
import { makeSelectCreateDonationsCause } from 'containers/Donations/selectors';
import { decimalMask } from 'utilities/masks';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';

function* createDonationSaga() {
  try {
    const formData = yield select(getFormValues(CREATE_DONATION_FORM));
    const selectedCause: ICause = yield select(makeSelectCreateDonationsCause());
    const dataToSend = {
      ...formData,
      amount: decimalMask(formData.amount),
      cause_uuid: selectedCause.uuid
    };
    const { data } = yield call(api, 'post', '/v1/donation', dataToSend);
    yield all([
      put(createDonationSuccessAction(data)),
      put(getDonationsAction()),
      call(NavigationService.navigate, routeNames.DONATIONS_HOME)
    ]);
  } catch (err) {
    yield put(createDonationFailAction(err));
  }
}

export default createDonationSaga;
