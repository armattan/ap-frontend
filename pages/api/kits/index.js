import { getKits } from "@/api/kits";

export default async function handler(req, res) {
  try {
    const response = await getKits({ size: 10, page: 1, sort: req.query.sort });
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}
