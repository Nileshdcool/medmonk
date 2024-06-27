import db from "../configurations/firebase";
import { DbCollections } from "@/Constants/DBCollections";
import { collection, addDoc } from "firebase/firestore";

export const addContactUs = async (contactUsData: any) => {
  try {
    const docRef = await addDoc(
      collection(db, DbCollections.Collections.ContactUs),
      contactUsData
    );
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};