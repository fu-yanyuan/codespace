import Rating from "../Basic/Rating"
import StatusIcon from "../Basic/StatusIcon"


const RecentItem = ({data}) => {
  const difficultyColor = {
    'Easy': 'text-lime-500',
    'Medium': 'text-yellow-500',
    'Hard': 'text-red-500'
  }

  const solvedStatus = {
    0: 'Unset',
    1: 'Easily',
    2: 'Moderately',
    3: 'Hardly',
    4: 'Cheat'
  }

  return (
    <div className="w-full bg-neutral-800 rounded-lg px-4 py-1 hover:bg-neutral-700 flex" >
      <div className="flex-none flex items-center w-[24px]">
        <StatusIcon status={data.status} />
      </div>
      <div className="flex-auto">
        <div className="flex" >
          <div className="flex-auto w-[240px]">
            <a href="https://leetcode.com/problems/two-sum/" className="text-sm font-bold text-neutral-100 cursor-pointer">
              <p className="truncate">{data.number}. {data.title}</p>
            </a>
          </div>
          <div className="flex-none w-[240px] flex justify-end">
            <div className="w-[80px]">
              <p className={`pl-2 text-sm font-bold text-neutral-100 ${difficultyColor[data.difficulty]}`}>{data.difficulty}</p>
            </div>
            <div className="w-[80px] flex items-center justify-center">
              <Rating ratingName={data.number} level={data.level} editMode={false} onRatingChange={null}/>
            </div>
            <div className="w-[80px] flex items-center justify-center">
              <p className="text-sm text-neutral-300">{solvedStatus[data.solvedWay]}</p>
            </div>    
            
          </div>
        </div>

        {/* <div className="basis-1/2 flex items-center">
          <a href="https://leetcode.com/problems/two-sum/" className="text-sm font-bold text-neutral-100 cursor-pointer truncate"> {data.number}. {data.title}</a>
        </div>
          <div className="w-1/6 items-center flex justify-end hidden lg:block">
            <p className={`text-sm font-bold text-neutral-100 ${difficultyColor[data.difficulty]}`}>{data.difficulty}</p>
          </div>
        <div className="basis-1/2 flex">
          <div className="mx-2 flex items-center justify-center">
            <Rating ratingName={data.number} level={data.level} editMode={false} onRatingChange={null}/>
          </div>
          <div className="mx-2 flex items-center justify-center">
            <p className="text-sm text-neutral-300">{solvedStatus[data.solvedWay]}</p>
          </div>          
        </div> */}

      </div>
    </div>
  )
}

export default RecentItem