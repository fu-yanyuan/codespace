import AttemptedStack from "./AttemptedStack/AttemptedStack"
import SearchBar from "./ControlBar/SearchBar"
import RecentContainer from "./Recent/RecentContainer"
import { attemptsListener } from "../firebase/firestore"
import { useState, useEffect } from "react"

const ControlContainer = () => {
  const [itemLists, setItemLists] = useState(null)

  useEffect(() => {
    const unsubscribe = attemptsListener(setItemLists)
  }, [])

  return (
    <div className="control-container flex flex-col min-w-[840px]">
      <div>
          <SearchBar />
      </div>
      <div className="flex flex-row mt-4">
        <div className="flex-auto w-1/3 h-[500px]">
          <AttemptedStack itemLists={itemLists}/>
        </div>
        <div className="flex-auto w-2/3 h-[500px] ml-5">
          <RecentContainer />
        </div>
      </div>
    </div>
  )
}

export default ControlContainer
