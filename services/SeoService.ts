import db from "../configurations/firebase";
import { MetaProps } from "@/Interfaces/SEO/MetaProps";
import { DbCollections } from "@/Constants/DBCollections";
import {
  DocumentSnapshot,
  DocumentData,
  doc,
  getDoc,
} from "firebase/firestore";

export const getMetaTags = async (
  pageId: string
): Promise<MetaProps | null> => {
  try {
    const pageRef = doc(db, DbCollections.Collections.SEO, pageId);
    const pageDoc: DocumentSnapshot<DocumentData> = await getDoc(pageRef);

    if (pageDoc.exists()) {
      const pageData = pageDoc.data() as MetaTags;
      return { metaData: pageData };
    } else {
      console.log("Page not found.: " + pageId);
      return null;
    }
  } catch (error) {
    console.error("Error fetching page data:", error);
    return null;
  }
};
