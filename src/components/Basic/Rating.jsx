import { useEffect, useState } from "react"

const Rating = ({ratingName, level, editMode, onRatingChange}) => {
  const [rating, setRating] = useState(level)

  useEffect(() => {
    setRating(level)
  }, [level])

  const handleChange = (e) => {
    if (editMode) {
      const newRating = Number(e.target.value)
      setRating(newRating)
      console.log(rating)
      if (onRatingChange) {
        onRatingChange('level', newRating)
      }   
    }

  }

  const getColor = (level, editMode) => {
    if (level === 0) {
      return 'bg-neutral-600'
    }

    if (editMode) {
      return 'bg-orange-400'
    }
  
    if (level >= 1 && level <= 5) {
      // console.log(ratingName, level, 'bg-orange-400')
      return 'bg-orange-400'
    } else {
      // console.log(ratingName, level, 'bg-nertral-100')
      return 'bg-neutral-600'
    }      
  }

  return (
    <div name={ratingName} className="rating rating-sm">
      <input type="radio" name={ratingName} className={"mask mask-star-2 " + getColor(level, editMode)}
             value={1} 
             checked={1 === rating}
             onChange={handleChange}/>
      <input type="radio" name={ratingName} className={"mask mask-star-2 " + getColor(level, editMode)} 
             value={2} 
             checked={2 === rating}
             onChange={handleChange}/>
      <input type="radio" name={ratingName} className={"mask mask-star-2 " + getColor(level, editMode)} 
             value={3} 
             checked={3 === rating}
             onChange={handleChange}/>
      <input type="radio" name={ratingName} className={"mask mask-star-2 " + getColor(level, editMode)} 
             value={4} 
             checked={4 === rating}
             onChange={handleChange}/>
      <input type="radio" name={ratingName} className={"mask mask-star-2 " + getColor(level, editMode)} 
             value={5} 
             checked={5 === rating}
             onChange={handleChange}/>
    </div>
  )
}

export default Rating