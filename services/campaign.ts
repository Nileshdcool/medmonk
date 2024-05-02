import db from "../configurations/firebase";
import { DbCollections } from "@/Constants/DBCollections";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { CampaignCustomizationModel } from "@/Interfaces/Campaign/CampaignCustomizationModel";

export const addCampaign = async (campaignData: any) => {
  try {
    const docRef = await addDoc(
      collection(db, DbCollections.Collections.Campaign),
      campaignData
    );
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getCampaignCustomizations = async (): Promise<
  CampaignCustomizationModel[]
> => {
  const campaignsCol = collection(
    db,
    DbCollections.Collections.CampaignCustomization
  );
  const campaignsSnapshot = await getDocs(campaignsCol);
  const campaignsList = campaignsSnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      Banner: data.Banner,
      Name: data.Name,
      CompanyName: data.CompanyName,
      ContactNumber: data.ContactNumber,
      CompanyEmailId: data.CompanyEmailId,
      Comments: data.Comments,
      CTA: data.CTA,
    };
  });
  return campaignsList;
};
