export interface CampaignModel{
    name: string;
    companyName: string;
    contactNumber: string;
    companyEmailId: string;
    comments: string;
}
export interface CampaignCustomizationModel
{
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
export interface CampaignCustomizationsModel
{
    data: [{attributes: CampaignCustomizationModel}]
}
export const defaultCampaignCustomizations: CampaignCustomizationModel = {
    Banner: {
      data: {
        attributes: {
          url: '/Home.png',
        },
      },
    },
    Name: true,
    CompanyName: true,
    ContactNumber: true,
    CompanyEmailId: true,
    Comments: true,
    CTA: 'Submit',
  };
