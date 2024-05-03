import db from "../configurations/firebase";
import { DbCollections } from "@/Constants/DBCollections";
import { NewsConstants } from "@/Constants/News/NewsConstants";
import { NewsCardData } from "@/Interfaces/News/NewsCardData";
import { collection, getDocs, Timestamp } from "firebase/firestore";

export const getNews = async (): Promise<NewsCardData[]> => {
  const postsCollection = collection(db, DbCollections.Collections.News);
  const postSnapshot = await getDocs(postsCollection);
  const postData = postSnapshot.docs
    .filter((doc) => doc.id !== NewsConstants.DefaultNewsDocumentId)
    .map((doc) => {
      const data = doc.data() as any;
      const articleDate = data.ArticleDate;
      let dateString = null;
      if (articleDate && articleDate instanceof Timestamp) {
        dateString = articleDate.toDate().toISOString();
      }
      return {
        ...data,
        ArticleDate: dateString,
      } as NewsCardData;
    });
  return postData;
};
