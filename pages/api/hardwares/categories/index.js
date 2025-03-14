import { url } from "@/api/base";
import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(`${url}/hardwares/categories`);
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}
