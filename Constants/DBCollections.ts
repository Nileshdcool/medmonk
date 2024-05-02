const Collections : ICollections = {
  HomePage: "HomePage",
  CampaignPage: "CampaignPage",
  CampaignCustomization: "CampaignCustomization",
  Campaign: "Campaign",
  NewsPage: "NewsPage",
  News: "NewsPosts",
  SEO: "Seo",
  AboutUsPage: "AboutUsPage",
  CookiesPage: "CookiesPage",
  LegalStatementPage: "LegalStatementPage",
  PrivacyPolicyPage: "PrivacyPolicyPage",
  ProductPage: "ProductPage",
  ServicesPage: "ServicesPage",
};
const AllCollections = () => {
  return Object.values(Collections);
};
const SeoCollections = () => {
  return Object.entries(Collections)
    .filter(([key, value]) => key.endsWith("Page"))
    .map(([key, value]) => key);
};
export const DbCollections : DbCollectionType = {
  Collections: Collections,
  Seo: SeoCollections(),
  All: AllCollections(),
};

interface DbCollectionType
{
    Collections : ICollections,
    Seo: string[],
    All: string[]
}
export interface ICollections {
    HomePage: string;
    CampaignPage: string;
    CampaignCustomization: string;
    Campaign: string;
    NewsPage: string;
    News: string;
    SEO: string;
    AboutUsPage: string;
    CookiesPage: string;
    LegalStatementPage: string;
    PrivacyPolicyPage: string;
    ProductPage: string;
    ServicesPage: string;
}