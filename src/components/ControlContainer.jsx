import AttemptedStack from "./AttemptedStack/AttemptedStack"
import SearchBar from "./ControlBar/SearchBar"
import RecentContainer from "./Recent/RecentContainer"
import { db } from "../firebase"
import { collection, query, where, orderBy, getDocs } from "firebase/firestore"
import { useState, useEffect } from "react"

const ControlContainer = () => {
  const [itemLists, setItemLists] = useState(null)

  const getAttempts = async () => {
    try {
      const collectionRef = collection(db, "leetcode")
      const q = query(collectionRef, where('status', '==', 1))
      const querySnapShot = await getDocs(q)
      // querySnapShot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // })

      const items = querySnapShot.docs.map(doc => ({
        ...doc.data()
      }));
      setItemLists(items)
      // console.log(items)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {getAttempts()}, [])

  return (
    <div className="control-container flex flex-row overflow-visible">
      <div className="basis-1/5 min-w-[300px] m-0">
        <div>
          <AttemptedStack itemLists={itemLists}/>
        </div>
      </div>
      <div className="basis-4/5 lc-lg:max-w-[calc(100%_-_316px)] w-full ml-4">
        <div>
          <SearchBar />
        </div>
        <div className="mt-4">
          <RecentContainer />
        </div>

      </div>
    </div>
  )
}

export default ControlContainer
