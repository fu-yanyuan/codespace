import Rating from "../Basic/Rating"
import StatusIcon from "../Basic/StatusIcon"

const AttemptingItem = ({data}) => {
  const difficultyColor = {
    'Easy': 'text-green-500',
    'Medium': 'text-yellow-500',
    'Hard': 'text-red-500'
  }

  return (
    <div className="w-full bg-neutral-800 px-4 py-2 hover:bg-neutral-700 flex text-[18px] text-neutral-200" >
      <div className="flex-none flex items-center w-[24px]">
        <StatusIcon status={data.status} />
      </div>
      <div className="flex-auto">
        <div className="flex" >
          <div className="flex-auto w-[240px]">
            <a href="https://leetcode.com/problems/two-sum/" className="font-bold cursor-pointer">
              <p className="truncate">{data.number}. {data.title}</p>
            </a>
          </div>
          <div className="flex-none w-[240px] flex justify-end">
            <div className="w-[120px]">
              <p className={`pl-2 font-bold ${difficultyColor[data.difficulty]}`}>{data.difficulty}</p>
            </div>
            <div className="w-[120px] flex items-center justify-center">
              <Rating ratingName={data.number} level={data.level} editMode={false} onRatingChange={null}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AttemptingItem