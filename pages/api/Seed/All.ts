import { seedNews } from "@/services/api/SeedData/SeedNews";
import type { NextApiRequest, NextApiResponse } from "next";
import { seedCampaignCustomizations } from "@/services/api/SeedData/SeedCampaignCustomizations";
import { seedSeo } from "@/services/api/SeedData/SeedSeo";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const seeds = [seedCampaignCustomizations, seedNews, seedSeo];
  let allSeeded = true;
  for (let i = 0; i < seeds.length; i++) {
    try {
      seeds[i]();
    } catch (error) {
      allSeeded = false;
      console.log(error);
    }
  }
  res
    .status(200)
    .json({
      Result: allSeeded
        ? "All the tables are seeded Successfully"
        : "Some of the tables are not seeded successfully!",
    });
}
