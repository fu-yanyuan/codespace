import React from 'react'
import Circle from '../Basic/Circle'
import Solved from '../Basic/Solved'

const ProgressCard = () => {
  return (
    <div className="rounded-lg w-full bg-neutral-800">
      <div className="flex flex-row items-center h-[180px] min-h-[180px] w-full p-4">
        <div class="w-1/3 mt-4">
          <Circle solved={60} total={300}/>
        </div>
        <div class="ml-4">
          <div>
            <Solved difficulty={'Easy'} solved={10} total={100} />
          </div>
          <div class="mt-2">
            <Solved difficulty={'Medium'} solved={20} total={100} />
          </div>
          <div class="mt-2">
            <Solved difficulty={'Hard'} solved={30} total={100} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressCard