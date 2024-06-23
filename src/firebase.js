// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE-9Tnv7Lri0dqxO28B6xjTirAdqvwoVY",
  authDomain: "codespace-dev-40ea7.firebaseapp.com",
  projectId: "codespace-dev-40ea7",
  storageBucket: "codespace-dev-40ea7.appspot.com",
  messagingSenderId: "750531582882",
  appId: "1:750531582882:web:3012fd68df080ed66df0fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }

export const getAttempts = async (setItemList) => {
  try {
    const collectionRef = collection(db, "leetcode")
    const q = query(collectionRef, where('status', '==', 1), orderBy('last_modified', 'desc'))
    const querySnapShot = await getDocs(q)
    // querySnapShot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // })

    const items = querySnapShot.docs.map(doc => ({
      ...doc.data()
    }));
    
    setItemList(items)

  } catch (err) {
    console.log(err)
  }
}

export const getRecentSolvedN = async (setItemList, limitNum) => {
  try {
    const collectionRef = collection(db, "leetcode")
    const q = query(collectionRef, where('status', '==', 9), orderBy('first_solved', 'desc'), limit(limitNum))
    const querySnapShot = await getDocs(q)

    const items = querySnapShot.docs.map(doc => ({
      ...doc.data()
    }));
    
    setItemList(items)

  } catch (err) {
    console.log(err)
  }
}

export const getRecentSolvedAll = async (setItemList) => {
  try {
    const collectionRef = collection(db, "leetcode")
    const q = query(collectionRef, where('status', '==', 9), orderBy('first_solved', 'desc'))
    const querySnapShot = await getDocs(q)

    const items = querySnapShot.docs.map(doc => ({
      ...doc.data()
    }));
    
    setItemList(items)

  } catch (err) {
    console.log(err)
  }
}

export const getRecentModified = async (setItemList, limitNum) => {
  try {
    const collectionRef = collection(db, "leetcode")
    const q = query(collectionRef, orderBy('last_modified', 'desc'), limit(limitNum))
    const querySnapShot = await getDocs(q)

    const items = querySnapShot.docs.map(doc => ({
      ...doc.data()
    }));
    
    setItemList(items)

  } catch (err) {
    console.log(err)
  }
}