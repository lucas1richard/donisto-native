import DonationConstants from '../constants';

export namespace IDonationActions {
  export interface GetDonations extends DonistoAction<
    DonationConstants.GET_DONATIONS,
    DonationConstants.GET_DONATIONS_FAIL,
    DonationConstants.GET_DONATIONS_SUCCESS,
    IDonation.Basic[]
  > {}
  export interface GetDonationsById extends DonistoAction<
    DonationConstants.GET_DONATIONS_BY_ID,
    DonationConstants.GET_DONATIONS_BY_ID_FAIL,
    DonationConstants.GET_DONATIONS_BY_ID_SUCCESS,
    IDonation.Basic[]
  > {
    WithUuids: {
      type: DonationConstants.GET_DONATIONS_BY_ID,
      data: string[]
    }
  }
  export interface CreateDonation extends DonistoAction<
    DonationConstants.CREATE_DONATION,
    DonationConstants.CREATE_DONATION_FAIL,
    DonationConstants.CREATE_DONATION_SUCCESS,
    IDonation.Basic[]
  > {}
  export interface SelectDonationCause {
    Default: {
      type: DonationConstants.SELECT_CAUSE,
    },
    WithUuid: {
      type: DonationConstants.SELECT_CAUSE,
      causeUuid: string
    }
  }
  export interface SelectDetailView {
    Default: {
      type: DonationConstants.SELECT_DETAIL_VIEW,
    },
    WithUuid: {
      type: DonationConstants.SELECT_DETAIL_VIEW,
      donationUuid: string
    }
  }
}

export namespace IDonationActionCreators {
  export interface GetDonations extends DonistoActionCreators<
    IDonationActions.GetDonations['Default'],
    IDonationActions.GetDonations['Fail'],
    IDonationActions.GetDonations['Success'],
    IDonation.Basic[]
  > {}
  export interface GetDonationsById extends DonistoActionCreators<
    IDonationActions.GetDonationsById['Default'],
    IDonationActions.GetDonationsById['Fail'],
    IDonationActions.GetDonationsById['Success'],
    IDonation.Basic[]
  > {
    WithUuids: (data: string[]) => IDonationActions.GetDonationsById['WithUuids']
  }
  export interface CreateDonation extends DonistoActionCreators<
    IDonationActions.CreateDonation['Default'],
    IDonationActions.CreateDonation['Fail'],
    IDonationActions.CreateDonation['Success'],
    IDonation.Basic[]
  > {}
  export interface SelectDonationCause {
    Default: (causeUuid: string) => IDonationActions.SelectDonationCause['Default'];
    WithUuid: (causeUuid: string) => IDonationActions.SelectDonationCause['WithUuid'];
  }
  export interface SelectDetailView {
    Default: (causeUuid: string) => IDonationActions.SelectDetailView['Default'];
    WithUuid: (causeUuid: string) => IDonationActions.SelectDetailView['WithUuid'];
  }
}