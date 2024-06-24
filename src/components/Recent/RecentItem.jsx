import Rating from "../Basic/Rating"
import StatusIcon from "../Basic/StatusIcon"


const RecentItem = ({data}) => {
  const difficultyColor = {
    'Easy': 'text-green-500',
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
    <div className="w-full bg-neutral-800 rounded-lg px-4 py-1 hover:bg-neutral-700" style={{display: 'flex', flex: '1 0 auto'}}>
      <div className="mx-2 flex items-center" style={{flex: '10 0 auto', width: '10px'}}>
        <StatusIcon status={data.status} />
      </div>
      <div className="mx-2 flex flex-row items-center" style={{flex: '200 0 auto', width: '200px'}}>
        <div className="truncate w-10/12 flex items-center">
          <a href="https://leetcode.com/problems/two-sum/" className="text-sm font-bold text-neutral-100 cursor-pointer"> {data.number}. {data.title}</a>
        </div>
        <div className="w-2/12 items-center flex justify-end">
          <p className={`text-sm font-bold text-neutral-100 ${difficultyColor[data.difficulty]}`}>{data.difficulty}</p>
        </div>
      </div>
      <div className="mx-2 flex items-center justify-center" style={{flex: '50 0 auto', width: '50px'}}>
        <Rating ratingName={data.number} level={data.level} editMode={false} onRatingChange={null}/>
      </div>
      <div className="mx-2 flex items-center justify-center" style={{flex: '30 0 auto', width: '80px'}}>
        <p className="text-sm text-neutral-300">{solvedStatus[data.solvedWay]}</p>
      </div>
    </div>
  )
}

export default RecentItem