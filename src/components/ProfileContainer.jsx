import Heatmap from "./Profile/Heatmap"
import NoteBoard from "./Profile/NoteBoard"
import Profile from "./Profile/Profile"
import ProfileCard from "./Profile/ProfileCard"
import ProgressCard from "./Profile/ProgressCard"

const ProfileContainer = () => {
  return (
    <div className='profile w-full flex flex-row'>
      {/* <div className="basis-1/5 min-w-[300px] m-0">
        <div>
          <ProfileCard />
        </div>
      </div> */}
      <div className="grow">
        <Profile />
      </div>
      <div className="grow ml-4">
        <ProgressCard />
      </div>
      <div className="ml-4">
        <Heatmap days={180}/>
      </div>
        


    </div>
  )
}

export default ProfileContainer