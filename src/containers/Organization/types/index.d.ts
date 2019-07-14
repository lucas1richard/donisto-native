declare namespace IOrganization {
  export interface Link {
    uuid: string;
    label: string;
    href?: string;
    description?: string;
    image?: string;
  }
  export interface DetailCause extends ICause {
    donations: IDonation.WithContact[];
  }
  export interface Basic {
    uuid: string;
    name: string;
    city?: string;
    state?: string;
    zip?: string;
    mission?: string;
    links?: Link[];
    contactIsMember?: boolean;
    causes?: DetailCause[];
  }
  
}