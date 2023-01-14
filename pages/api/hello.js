import db from "../../lib/firebase-admin"

export default async function handler(req, res) {
  // req param from url
  const { uid } = req.query;
  const scs = await db.collection("users").doc(uid).get();
  res.status(200).json({ scs: scs.data().social_credit_score });
}