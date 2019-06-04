interface ICause {
  id: string;
  name: string;
  organization_uuid: string;
  suggested_donation_amount?: number;
  uuid: string;
  createdAt: string;
  updatedAt: string;
  goal_amount: number;
  donations?: IDonationWContact[]
}