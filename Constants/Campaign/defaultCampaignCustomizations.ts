import { CampaignCustomizationModel } from "@/Interfaces/Campaign/CampaignCustomizationModel";
export const defaultCampaignCustomizations: CampaignCustomizationModel = {
  Banner: {
    data: {
      attributes: {
        url: "/Home.png",
      },
    },
  },
  Name: true,
  CompanyName: true,
  ContactNumber: true,
  CompanyEmailId: true,
  Comments: true,
  CTA: "Submit",
};
