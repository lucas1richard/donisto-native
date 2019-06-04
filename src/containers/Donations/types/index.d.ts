interface IDonation {
  amount: number;
  cause_uuid: string;
  contact_uuid: string;
  id: string;
  is_anonymous: boolean
  message?: string;
  uuid: string;
  createdAt: string;
  updatedAt: string;
}
interface IDonationDetail {
  amount: number;
  cause_uuid: string;
  contact_uuid: string;
  id: string;
  is_anonymous: boolean
  message?: string;
  uuid: string;
  createdAt: string;
  updatedAt: string;
  cause: ICause;
}

interface IDonationWContact {
  amount: number;
  cause_uuid: string;
  contact_uuid: string;
  id: string;
  is_anonymous: boolean
  message?: string;
  uuid: string;
  createdAt: string;
  updatedAt: string;
  contact: IContactPrivate;
}