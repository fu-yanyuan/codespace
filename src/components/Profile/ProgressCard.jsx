import React, { useEffect, useState } from 'react'
import Circle from '../Basic/Circle'
import Solved from '../Basic/Solved'

import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/firebase'

const ProgressCard = () => {

  const [lc, setLc] = useState({
    Easy: 0,
    Medium: 0,
    Hard: 0
  })
  const [solved, setSolved] = useState({
    Easy: 0,
    Medium: 0,
    Hard: 0
  })

  useEffect(() => {
    const unsubLc = onSnapshot(doc(db, "summary", "leetcode"), (doc) => {
      setLc(doc.data())
    })
    const unsubSolved = onSnapshot(doc(db, "summary", "karush1fa"), (doc) => {
      setSolved(doc.data())
    })
  }, [])


  return (
    <div className="rounded-lg w-full bg-neutral-800">
      <div className="flex flex-row items-center h-[180px] min-h-[180px] w-full p-4">
        <div className="w-1/3 mt-4">
          <Circle solved={solved.Easy + solved.Medium + solved.Hard} total={lc.Easy + lc.Medium + lc.Hard}/>
        </div>
        <div className="ml-4">
          <div>
            <Solved difficulty={'Easy'} solved={solved.Easy} total={lc.Easy} />
          </div>
          <div className="mt-2">
            <Solved difficulty={'Medium'} solved={solved.Medium} total={lc.Medium} />
          </div>
          <div className="mt-2">
            <Solved difficulty={'Hard'} solved={solved.Hard} total={lc.Hard} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressCard