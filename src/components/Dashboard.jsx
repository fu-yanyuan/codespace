import ControlContainer from "./ControlContainer"
import ProfileContainer from "./ProfileContainer"

const Dashboard = () => {
  return (
    <div className="min-h-screen min-w-[872px] w-full lg:max-w-screen-xl bg-neutral-900 mx-auto">
      <div className="p-4">
        <ProfileContainer />
      </div>
      <div className="px-4">
        <ControlContainer />
      </div>
    </div>        
  )
}

export default Dashboard