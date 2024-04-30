import db from '../configurations/firebase';
import { PostCardData } from '@/Interfaces/Post/PostCardData';
import { collection, getDocs, Timestamp } from 'firebase/firestore';

export const getPosts = async (): Promise<PostCardData[]> => {
    const postsCollection = collection(db, 'News');
    const postSnapshot = await getDocs(postsCollection);
    const postData = postSnapshot.docs.map(doc => {
      const data = doc.data() as any;
      const articleDate = data.articleDate;
      let date = null;
      if (articleDate && articleDate instanceof Timestamp) {
            date = articleDate.toDate();
      }
      return {
        ...data,
        articleDate: date,
      } as PostCardData;
    });
    return postData;
  };
  