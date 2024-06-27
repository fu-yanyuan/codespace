import { auth, db } from "./firebase";
import { getDoc, doc } from "firebase/firestore";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const doCreateUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const doSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const checkWhitelist = async (email) => {
    console.log(email)
    try {
        // Check if user is in the whitelist
        const userDoc = await getDoc(doc(db, "whitelist", email));
        if (userDoc.exists()) {
            return true
        }
        return false
    } catch (err) {
        console.log(err)
        return false
    }
}

export const doSignOut = () => {
    return auth.signOut()
}