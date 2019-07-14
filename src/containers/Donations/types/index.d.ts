declare namespace IDonation {
  export interface Basic {
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
  export interface Detail extends Basic {
    cause: ICause;
  }
  export interface WithContact extends Basic {
    contact: IContact.Private;
  }
}