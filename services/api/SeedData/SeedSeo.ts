import { Seed } from "./Seed";
import { EmptySeo } from "@/Constants/Seo/EmptySeo";
import { DbCollections, ICollections } from "@/Constants/DBCollections";

export const seedSeo = async () => {
  let seeded = true;

  for (let index = 0; index < DbCollections.Seo.length; index++) {
    let emptyDocument = { ...EmptySeo };
    try {
      let page = DbCollections.Seo[index] as keyof ICollections;
      emptyDocument.Title = formatTitle(DbCollections.Seo[index]);
      Seed(
        DbCollections.Collections.SEO,
        DbCollections.Collections[page],
        emptyDocument
      );
    } catch (error) {
      seeded = false;
      console.error(
        `Seeding failed for page: ${DbCollections.Seo[index]} with error: ${error}`
      );
    }
  }
  if (!seeded) {
    throw new Error("Seeding operation failed for one or more SEO entries.");
  }
};
function formatTitle(title: string) {
  return title ? title.replace(/(.)([A-Z])/g, "$1 $2") : "";
}
