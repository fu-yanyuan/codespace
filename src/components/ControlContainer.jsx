import AttemptedStack from "./AttemptedStack/AttemptedStack"
import SearchBar from "./ControlBar/SearchBar"
import RecentContainer from "./Recent/RecentContainer"
import { getAttempts } from "../firebase/firestore"
import { useState, useEffect } from "react"

const ControlContainer = () => {
  const [itemLists, setItemLists] = useState(null)

  useEffect(() => {getAttempts(setItemLists)}, [])

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
