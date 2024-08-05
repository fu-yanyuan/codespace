import RecentTabs from "./RecentTabs"
import RecentPagination from "./RecentPagination"
import AttemptingItem from "./AttemptingItem"
import { useState, useEffect } from "react"
import { getRecentSolvedN, getRecentSolvedAll, getRecentModified, recentSolvedNListener, attemptsListener } from "../../firebase/firestore"

const RecentContainer = () => {
  const [tabValue, setTabValue] = useState(1)
  const [recentSolvedN, setRecentSolvedN] = useState([])
  const [itemList, setItemList] = useState([])
  const [attempting, setAttempting] = useState(null)

  useEffect(() => {
    const unsubscribe = recentSolvedNListener(setRecentSolvedN, 15)
    const unsubscribe2 = attemptsListener(setAttempting)
  }, [])

  const handleItemList = async () => {
    if (tabValue === 1) {
      setItemList(recentSolvedN)
    } else if (tabValue === 2) {
      getRecentModified(setItemList, 15)
    } else if (tabValue === 3) {
      getRecentSolvedAll(setItemList)
    } else {
      setAttempting(attempting)
      // setItemList(attempting)
    }
  }

  useEffect(() => {
    handleItemList()
  }, [tabValue, recentSolvedN, attempting])

  return (
    <div className="rounded-lg max-w-full w-full bg-neutral-800">
      <div className="pt-4 pb-2">
        <RecentTabs setTabValue={setTabValue}/>
      </div>
      <div className="py-2">
        {/* {itemLists?.map((item) => <RecentItem key={item.number} data={item}/>)} */}
        { tabValue <= 3 ?
            <RecentPagination allitems={itemList} itemsPerPage={15} />
          : <div className='divide-y divide-neutral-500'>{attempting?.map((item) => <AttemptingItem key={item.number} data={item}/>)}</div>
        }
        
      </div>   
    </div>
  )
}

export default RecentContainer