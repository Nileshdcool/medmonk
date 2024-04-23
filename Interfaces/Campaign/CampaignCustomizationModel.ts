export interface CampaignCustomizationModel {
  Banner: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  Name: boolean;
  CompanyName: boolean;
  ContactNumber: boolean;
  CompanyEmailId: boolean;
  Comments: boolean;
  CTA: string;
}
