import { MetaProps } from "../SEO/MetaProps";
import { NewsCardData } from "@/Interfaces/News/NewsCardData";

export interface NewsPageProps {
  posts: NewsCardData[];
  metaData: MetaProps;
}
