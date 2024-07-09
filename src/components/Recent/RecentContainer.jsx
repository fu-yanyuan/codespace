import RecentTabs from "./RecentTabs"
import RecentItem from "./RecentItem"
import RecentPagination from "./RecentPagination"
import { useState, useEffect } from "react"
import { getRecentSolvedN, getRecentSolvedAll, getRecentModified } from "../../firebase/firestore"

const RecentContainer = () => {
  const [tabValue, setTabValue] = useState(1)
  const [itemList, setItemList] = useState([])

  useEffect(() => {
    if (tabValue === 1) {
      getRecentSolvedN(setItemList, 15)
    } else if (tabValue === 2) {
      getRecentModified(setItemList, 15)
    } else {
      getRecentSolvedAll(setItemList)
    }
  }, [tabValue])

  return (
    <div className="rounded-lg max-w-full w-full bg-neutral-800">
      <div className="pt-4 pb-2">
        <RecentTabs setTabValue={setTabValue}/>
      </div>
      <div className="py-2">
        {/* {itemLists?.map((item) => <RecentItem key={item.number} data={item}/>)} */}
        <RecentPagination allitems={itemList} itemsPerPage={15} />
      </div>   
    </div>
  )
}

export default RecentContainer