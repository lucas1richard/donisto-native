interface IOrganizationLink {
  uuid: string;
  label: string;
  href?: string;
  description?: string;
  image?: string;
}

interface IOrgDetailCause extends ICause {
  donations: IDonationWContact[];
}

interface IOrganization {
  uuid: string;
  name: string;
  city?: string;
  state?: string;
  zip?: string;
  mission?: string;
  links?: IOrganizationLink[];
  contactIsMember?: boolean;
  causes?: IOrgDetailCause[];
}