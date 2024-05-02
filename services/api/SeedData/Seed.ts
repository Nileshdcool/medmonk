import db from "@/configurations/firebase";
import { DbCollections } from "@/Constants/DBCollections";
import { NewsConstants } from "@/Constants/News/NewsConstants";
import { collection, getDocs, doc, setDoc, getDoc } from "firebase/firestore";

export const Seed = async (
  collectionName: string,
  documentId: string,
  emptyDocument: any
) => {
  const collRef = collection(db, collectionName);
  const snapshot = await getDocs(collRef);
  if (snapshot.empty) {
    const docRef = doc(db, collectionName, documentId);
    try {
      await setDoc(docRef, emptyDocument);
      console.log(`${collectionName} created with Id: `, documentId);
    } catch (e) {
      console.error(
        `Error creating ${collectionName} document with Id ${documentId}: `,
        e
      );
      throw e;
    }
  } else {
    const specificDocRef = doc(collRef, documentId);
    const docSnap = await getDoc(specificDocRef);

    if (!docSnap.exists()) {
      try {
        await setDoc(specificDocRef, emptyDocument);
        console.log(`${collectionName} created with Id: `, documentId);
      } catch (e) {
        console.error(
          `Error creating ${collectionName} document with Id ${documentId}: `,
          e
        );
        throw e;
      }
    } else {
      console.log(`Document with the ${documentId} Id already exists.`);
    }
  }
};
