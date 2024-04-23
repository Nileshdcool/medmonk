import { CampaignCustomizationModel } from "@/Interfaces/Campaign/CampaignCustomizationModel";
export const defaultCampaignCustomizations: CampaignCustomizationModel = {
  Banner: {
    data: {
      attributes: {
        url: "/assets/home-hero.jpg",
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
