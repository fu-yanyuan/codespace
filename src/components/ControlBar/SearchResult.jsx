import { useEffect, useState } from "react"
import Rating from "../Basic/Rating"
import SolvedStatus from "../Basic/SolvedStatus"
import StatusIcon from "../Basic/StatusIcon"

const SearchResult = ({ item }) => {
  const [data, setData] = useState({
    number: item.number,
    title: item.title,
    titleSlug: item.titleSlug,
    difficulty: item.difficulty,
    status: item.status, 
    solvedWay: item.solved_status ? item.solvedWay : 0, 
    level: item.level ? item.level : 0
  })

  useEffect(() => {
    setData({
      number: item.number,
      title: item.title,
      titleSlug: item.titleSlug,
      difficulty: item.difficulty,
      status: item.status, 
      solvedWay: item.solved_status ? item.solvedWay : 0, 
      level: item.level ? item.level : 0
    })
  }, [item])

  const getColor = (d) => {
    if (d === 'Easy') {
      return 'text-success'
    } else if (d === 'Medium') {
      return 'text-warning'
    } else {
      return 'text-error'
    }
  }

  const handleDataChange = (key, value) => {
    // console.log(data)
    setData(data => ({
      ...data,
      [key] : value
    }))
    // console.log(data)
  }

  return (
    <div className="w-full bg-neutral-800" style={{display: 'flex', flex: '1 0 auto'}}>
      <div className="mx-2 flex items-center" style={{flex: '10 0 auto', width: '10px'}}>
        <StatusIcon status={data.status} />
      </div>
      <div className="mx-2 flex flex-row items-center" style={{flex: '200 0 auto', width: '200px'}}>
        <div className="truncate w-10/12 flex items-center">
          <a href="https://leetcode.com/problems/two-sum/" className="text-sm font-bold text-neutral-100"> {data.number}. {data.title}</a>
        </div>
        <div className="w-2/12 items-center flex justify-end">
          <p className={"text-sm font-bold " + getColor(data.difficulty)}>{data.difficulty}</p>
        </div>
      </div>
      <div className="mx-2 flex items-center justify-center" style={{flex: '50 0 auto', width: '50px'}}>
        <Rating ratingName={'search-result-' + data.number} level={data.level} editMode={true} onRatingChange={handleDataChange}/>
      </div>
      <div className="mx-2 flex items-center justify-center" style={{flex: '30 0 auto', width: '80px'}}>
        <SolvedStatus initialSelection={data.solvedWay} editMode={true} onSelectionChange={handleDataChange}/>
      </div>
      <div className="mx-2 flex items-center justify-end" style={{flex: '70 0 auto', width: '80px'}}>
        {item.status === 9 ? (
          <button className="btn btn-error btn-xs" onClick={null}>Modify</button> 
        ) : item.status === 1 ? (
          <button className="btn btn-success btn-xs" onClick={null}>Solve</button> 
        ) : (
          <>
            <button className="btn btn-warning btn-xs mr-2" onClick={null}>Attempt</button>
            <button className="btn btn-success btn-xs" onClick={null}>Solve</button>            
          </>
        )}
      </div>
    </div>
  )
}

export default SearchResult