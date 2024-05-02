import type { NextApiRequest, NextApiResponse } from "next";
import { seedCampaignCustomizations } from "@/services/api/SeedData/SeedCampaignCustomizations";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  seedCampaignCustomizations();
  res.status(200).json({ Result: "Campaign Customizations Seed Completed." });
}
