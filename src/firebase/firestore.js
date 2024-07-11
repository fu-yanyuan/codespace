import { db } from "./firebase";
import { collection, doc, query, where, getDoc, getDocs, orderBy, limit, updateDoc, serverTimestamp, runTransaction, onSnapshot } from 'firebase/firestore';

export const attemptsListener = async (setData) => {
  const q = query(collection(db, "leetcode"), where('status', '==', 1), orderBy('last_modified', 'desc'))
  const unsubscribe = onSnapshot(q, 
    (querySnapshot) => {
      const items = querySnapshot.docs.map(doc => ({
        ...doc.data()
      }))
      setData(items)
    },
    (error) => {
      console.log(err)
    })

    return unsubscribe
}

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
const getCurDateStr = () => {
    const today = new Date();
    
    // Get the current date in yyyy-mm-dd format
    const currentYear = today.getFullYear();
    const currentMonth = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const currentDate = String(today.getDate()).padStart(2, '0');
    const currentDateStr = `${currentYear}-${currentMonth}-${currentDate}`;
  
    console.log(currentDateStr)
    return currentDateStr
  }
  
export const solveProblem = async (e, data) => {
    e.preventDefault()
  
    const curDateStr = getCurDateStr()
  
    const lcDocRef = doc(db, "leetcode", String(data.number))
    const activityDocRef = doc(db, "activity_calendar", curDateStr)
    const summaryDocRef = doc(db, "summary", "karush1fa")
  
    try {
      await runTransaction(db, async (transaction) => {
        // reads before writes
        const summaryDoc = await transaction.get(summaryDocRef)
        const activityDoc = await transaction.get(activityDocRef)

        // set activity
        if (activityDoc.exists()) {
          // update
          const newSolved = activityDoc.data().solved + 1
          const newCount = activityDoc.data().count + 1
          transaction.update(activityDocRef, {
            solved: newSolved,
            count: newCount
          })
        } else {
          transaction.set(activityDocRef, {
            date: curDateStr,
            attempted: 0,
            solved: 1,
            count: 1
          })
        }
  
        // update leetcode
        transaction.update(lcDocRef, {
          status: 9,
          level: data.level,
          solvedWay: data.solvedWay,
          first_solved: serverTimestamp(),
          last_modified: serverTimestamp() 
        })

        // update summary collection
        const newValue = summaryDoc.data()[data.difficulty] + 1
        transaction.update(summaryDocRef, {
          [data.difficulty]: newValue
        })
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
  
      // window.location.reload()
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
      // console.log(date_str)
  
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
      
      // console.log(items)
      // setCalendarData(items)
      return items
  
    } catch (err) {
      console.log(err)
    }
  }
