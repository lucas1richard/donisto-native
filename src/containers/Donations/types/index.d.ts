interface IDonation {
  amount: number;
  cause_uuid: string;
  contact_uuid: string;
  id: string;
  is_anonymous: boolean
  message?: string;
  uuid: string;
}
interface IDonationDetail {
  amount: number;
  cause_uuid: string;
  contact_uuid: string;
  id: string;
  is_anonymous: boolean
  message?: string;
  uuid: string;
  cause: ICause;
}