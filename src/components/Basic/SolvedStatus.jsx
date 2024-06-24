import { useState, useEffect } from "react"

const SolvedStatus = ({initialSelection, editMode, onSelectionChange}) => {
  const options = [
    { label: 'Unset', value: 0 },
    { label: 'Easily', value: 1 },
    { label: 'Moderately', value: 2 },
    { label: 'Hardly', value: 3 },
    { label: 'Cheat', value: 4 },
  ]

  const [selectedOption, setSelectedOption] = useState(initialSelection)

  useEffect(() => {
    setSelectedOption(initialSelection);
  }, [initialSelection])

  const handleChange = (e) => {
    if (editMode) {
      const newValue = e.target.value 
      setSelectedOption(newValue)
      if (onSelectionChange) {
        onSelectionChange('solvedWay', Number(newValue))
      }
    }

  }

  return (
    <select 
      className="select select-bordered select-xs w-full max-w-xs"
      value={selectedOption}
      onChange={handleChange}
      disabled={!editMode}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default SolvedStatus