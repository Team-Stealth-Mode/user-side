import firebase from "./firebase";

const firestore = firebase.firestore();

export function createUser(uid, data) {
    return firestore.collection("users").doc(uid).set({ uid, ...data }, { merge: true });
}

// get social_credit_score from users collection for a given email id
export async function getSocialCreditScore(email) {
    const user = await firestore.collection("users").where("email", "==", email).get();
    const scs = user.docs[ 0 ].data().social_credit_score;
    return scs;
}