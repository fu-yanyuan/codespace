import { useEffect, useRef, useState } from "react"
import { db } from "../../firebase/firebase"
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import Line from "../Basic/Line";
import SearchResult from "./SearchResult";

const SearchBar = () => {
  const [number, setNumber] = useState('')
  const [item, setItem] = useState(null)
  const unsubRef = useRef(null)

  const search = async (event) => {
    event.preventDefault()

    // unsubscribe the previous listener if it exists
    if (unsubRef.current) {
      unsubRef.current()
    }

    const unsub = onSnapshot(doc(db, "leetcode", number), (doc) => {
      setItem(doc.data())
    }, (error) => {
      console.log(error)
    })
    
    unsubRef.current = unsub
  }

  useEffect(() => {

  }, [number])

  const handleChange = (event) => {
    setNumber(event.target.value)
    // console.log(number)
  }

  return (
    <div className="rounded-lg min-w-max max-w-full w-full bg-neutral-800 p-4">
      <div className="flex flex-row items-center justify-center">
        <div className="join">
          <input type="number" 
                className="input join-item input-bordered input-sm w-[100px]" 
                placeholder="number"
                value={number}
                onChange={handleChange}/>
          <button className="btn join-item rounded-r-full btn-outline btn-warning btn-sm" type="submit" onClick={search}>Search</button>
        </div>
      </div>
      { item &&
        <>
          <Line />
          <SearchResult item={item}/>
        </>
      }
    </div>
  )
}

export default SearchBar