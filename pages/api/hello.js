import db from "../../lib/firebase-admin"

export default async function handler(_, res) {
  const scs = await db.collection("users").doc("UpgpGpzXKfR7IvSY6QeQk1DNUyd2").get();
  res.status(200).json({ scs: scs.data().social_credit_score });
}