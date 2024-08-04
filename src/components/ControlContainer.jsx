import SearchBar from "./ControlBar/SearchBar"
import RecentContainer from "./Recent/RecentContainer"

const ControlContainer = () => {
  return (
    <div className="control-container flex flex-col min-w-[840px]">
      <div>
          <SearchBar />
      </div>
      <div className="flex flex-row mt-4">
        <div className="w-full">
          <RecentContainer />
        </div>
      </div>
    </div>
  )
}

export default ControlContainer
