import { seedNews } from "@/services/api/SeedData/SeedNews";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  seedNews();
  res.status(200).json({ Result: "News Seed Completed." });
}
