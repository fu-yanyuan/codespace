import RecentTabs from "./RecentTabs"
import RecentItem from "./RecentItem"
import RecentPagination from "./RecentPagination"
import { useState, useEffect } from "react"
import { getRecentSolvedN, getRecentSolvedAll, getRecentModified } from "../../firebase"

const RecentContainer = () => {
  const [tabValue, setTabValue] = useState(1)
  const [itemList, setItemList] = useState([])

  // const itemLists = [
  //   { number: 1,
  //     title: 'test', 
  //     status: 0,
  //     difficulty: 'Easy',
  //     level: 3,
  //     solved_status: 2
  //   },
  //   { number: 2,
  //     title: 'test', 
  //     status: 1,
  //     difficulty: 'Medium',
  //     level: 3,
  //     solved_status: 1
  //   },
  //   { number: 3,
  //     title: 'test',
  //     status: 2,
  //     difficulty: 'Difficulty',
  //     level: 3,
  //     solved_status: 0
  //   }
  // ]


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
    <div className="rounded-lg min-w-max max-w-full w-full bg-neutral-800">
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