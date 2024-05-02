import db from "../configurations/firebase";
import { NewsCardData } from "@/Interfaces/News/NewsCardData";
import { collection, getDocs, Timestamp } from "firebase/firestore";

export const getPosts = async (): Promise<NewsCardData[]> => {
  const postsCollection = collection(db, "News");
  const postSnapshot = await getDocs(postsCollection);
  const postData = postSnapshot.docs.map((doc) => {
    const data = doc.data() as any;
    const articleDate = data.articleDate;
    let date = null;
    if (articleDate && articleDate instanceof Timestamp) {
      date = articleDate.toDate();
    }
    return {
      ...data,
      articleDate: date,
    } as NewsCardData;
  });
  return postData;
};
