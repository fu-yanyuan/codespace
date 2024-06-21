import Bar from "./Bar"

const Solved = ({difficulty, solved, total}) => {
  return (
    <div>
      <div className='flex justify-between w-[200px] mb-1'>
        <div className='flex items-center'>
          <p className='w-[50px] text-[#9FA0A5] text-sm'>{difficulty}</p>

          <div className="flex flex-1 items-center">
            <span className="ml-[9px] mr-[5px] text-sm font-medium leading-[20px] text-[#FFFEFE]">{solved}</span>
            <span className="text-xs font-medium text-[#626367]">/{total}</span>
          </div>
        </div >
      </div>
      <Bar difficulty={difficulty} solved={solved} total={total}/>
    </div>
  )
}

export default Solved