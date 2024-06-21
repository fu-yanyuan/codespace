import Heatmap from "./Profile/Heatmap"
import NoteBoard from "./Profile/NoteBoard"
import ProfileCard from "./Profile/ProfileCard"
import ProgressCard from "./Profile/ProgressCard"

const ProfileContainer = () => {
  return (
    <div className='profile flex flex-row'>
      <div className="basis-1/5 min-w-[300px] m-0">
        <div>
          <ProfileCard />
        </div>
      </div>
      <div className="basis-4/5 w-full ml-4">
        <div className="flex w-full flex-row">
          <div className="w-1/2">
            <ProgressCard />
          </div>
          <div className="ml-4 w-1/2">
            <NoteBoard />
          </div>
        </div>
        <div className="mt-4 w-full">
          <Heatmap />
        </div>
      </div>
    </div>
  )
}

export default ProfileContainer