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
      <div className="unsolved-item flex items-center rounded-lg bg-neutral-800 hover:bg-neutral-700 cursor-pointer p-1">
        <div className="peer flex-none w-[16px] form-control">
          <label className="cursor-pointer label items-center p-0">
            <input type="checkbox" className={`checkbox checkbox-xs ${checkboxColor[item.difficulty]}`} />
          </label>
        </div>
        <div className={`info-container pl-3 pr-2 flex-1 w-full peer-has-[:checked]:line-through decoration-2 ${difficultyColorVariants[item.difficulty]}`}>
          <p className="text-sm font-bold text-neutral-100 truncate">{item.number}. {item.title}</p>
        </div>
      </div>
    )
  }
  
  export default UnsolvedItem