interface IOrganization {
  uuid: string;
  name: string;
  city?: string;
  state?: string;
  zip?: string;
  mission?: string;
  links?: any[];
  contactIsMember?: boolean;
}