// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, doc, query, where, getDocs, orderBy, limit, updateDoc, serverTimestamp, count } from 'firebase/firestore';

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

/* Search Result Buttons */

export const solveProblem = async (e, data) => {
  e.preventDefault()

  const docRef = doc(db, "leetcode", String(data.number))
  try {
    await updateDoc(docRef, {
      status: 9,
      level: data.level,
      solvedWay: data.solvedWay,
      first_solved: serverTimestamp(),
      last_modified: serverTimestamp() 
    })    

    window.location.reload()
  } catch (err) {
    console.log(err)
  }
}

export const modifyProblem = async (e, data) => {
  e.preventDefault()

  const docRef = doc(db, "leetcode", String(data.number))
  try {
    await updateDoc(docRef, {
      level: data.level,
      solvedWay: data.solvedWay,
      last_modified: serverTimestamp() 
    })

    window.location.reload()
  } catch (err) {
    console.log(err)
  }
}

export const attemptProblem = async (e, data) => {
  e.preventDefault()

  const docRef = doc(db, "leetcode", String(data.number))
  try {
    await updateDoc(docRef, {
      status: 1,
      level: data.level ? data.level : 0,
      solvedWay: data.solvedWay ? data.solvedWay : 0,
      last_modified: serverTimestamp() 
    })

    window.location.reload()
  } catch (err) {
    console.log(err)
  }
}

/* calendar */
export const getCalendarData = async (date_str) => {
  const calcLevel = (value) => {
    if (value === 0) {
      return 0
    } else if (value > 0 && value < 3) {
      return 1
    } else if (value >= 3 && value < 5) {
      return 2
    } else if (value >= 5 && value < 7) {
      return 3
    } else {
      return 4
    }
  }

  try {
    console.log(date_str)

    const collectionRef = collection(db, "activity_calendar")
    const q = query(collectionRef, where('date', '>=', date_str), orderBy('date'))
    const querySnapShot = await getDocs(q)   
    
    // const items = querySnapShot.docs.map(doc => ({
    //   ...doc.data()
    // }));

    const items = querySnapShot.docs.map(doc => {
      const data = doc.data()
      return {
        date: data.date,
        count: data.count,
        level: calcLevel(data.count)
      }
    });
    
    console.log(items)
    // setCalendarData(items)
    return items

  } catch (err) {
    console.log(err)
  }
}