import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db("test");
    const collections = await db.collections();
    res.status(200).json({ ok: true, collections: collections.length });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
}
