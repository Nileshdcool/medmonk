import { Seed } from "./Seed";
import { DbCollections } from "@/Constants/DBCollections";
import { NewsConstants } from "@/Constants/News/NewsConstants";
export const seedNews = async () => {
  Seed(
    DbCollections.Collections.News,
    NewsConstants.DefaultNewsDocumentId,
    NewsConstants.EmptyNews
  );
};
