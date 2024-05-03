import { Seed } from "./Seed";
import { DbCollections } from "@/Constants/DBCollections";
import { CampaignConstants } from "@/Constants/Campaign/CampaignConstants";
import { defaultCampaignCustomizations } from "@/Constants/Campaign/defaultCampaignCustomizations";

export const seedCampaignCustomizations = async () => {
  Seed(
    DbCollections.Collections.CampaignCustomization,
    CampaignConstants.CustomizationDocumentId,
    defaultCampaignCustomizations
  );
};
