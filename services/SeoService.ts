import { MetaProps } from "@/Interfaces/SEO/MetaProps";
import db from "../configurations/firebase";
import {
  DocumentSnapshot,
  DocumentData,
  doc,
  getDoc,
} from "firebase/firestore";

export const getMetaTags = async (pageId: string): Promise<MetaProps | null> => {
  try {
    const pageRef = doc(db, "SEO", pageId);
    const pageDoc: DocumentSnapshot<DocumentData> = await getDoc(pageRef);

    if (pageDoc.exists()) {
      const pageData = pageDoc.data() as MetaTags;  // Ensure MetaTags is correctly defined
      return { metaData: pageData };  // Ensure MetaProps expects an object with metaData property
    } else {
      console.log("Page not found.: "+ pageId);
      return null;
    }
  } catch (error) {
    console.error("Error fetching page data:", error);
    return null;
  }
};
