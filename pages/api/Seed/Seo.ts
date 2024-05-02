import { seedSeo } from "@/services/api/SeedData/SeedSeo";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  seedSeo();
  res.status(200).json({ Result: "Seo Seed Completed." });
}
