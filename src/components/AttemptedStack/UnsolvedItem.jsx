const UnsolvedItem = ({ item }) => {
    const difficultyColorVariants = {
      'Easy': 'decoration-success',
      'Medium': 'decoration-warning',
      'Hard': 'decoration-error'
    }
    const checkboxColor = {
      'Easy': 'checkbox-success',
      'Medium': 'checkbox-warning',
      'Hard': 'checkbox-error'
    }
  
    return (
      <div className="unsolved-item flex flex-row items-center w-full rounded-lg bg-neutral-800 hover:bg-neutral-700 cursor-pointer">
        <div className="peer form-control mr-3">
          <label className="cursor-pointer label items-center">
            <input type="checkbox" className={`checkbox checkbox-xs ${checkboxColor[item.difficulty]}`} />
          </label>
        </div>
        <div className={`info-container flex flex-row w-5/6 peer-has-[:checked]:line-through decoration-2 ${difficultyColorVariants[item.difficulty]}`}>
          <p className="text-sm font-bold text-neutral-100 truncate">{item.number}. {item.title}</p>
        </div>
      </div>
    )
  }
  
  export default UnsolvedItem