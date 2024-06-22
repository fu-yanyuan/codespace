import { useState } from "react"

const SearchBar = () => {
  const [number, setNumber] = useState('')

  const search = () => {
    
  }

  const handleChange = (event) => {
    setNumber(event.target.value)
    // console.log(number)
  }

  return (
    <div className="rounded-lg min-w-max max-w-full w-full bg-neutral-800 p-4">
      <div class="flex flex-row items-center justify-center">
        <div className="join">
          <input type="number" 
                className="input join-item input-bordered input-sm w-[100px]" 
                placeholder="number"
                value={number}
                onChange={handleChange}/>
          <button className="btn join-item rounded-r-full btn-outline btn-warning btn-sm" type="submit" onClick={search}>Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar