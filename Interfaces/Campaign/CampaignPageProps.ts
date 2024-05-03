import { MetaProps } from "../SEO/MetaProps";
import { CampaignCustomizationModel } from "./CampaignCustomizationModel";

export interface CampaignPageProps {
  customizationData: CampaignCustomizationModel;
  metaData: MetaProps;
}
