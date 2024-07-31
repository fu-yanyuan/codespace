import UnsolvedItem from "./UnsolvedItem"

const AttemptedStack = ({ itemLists }) => {

  return (
    <div className="rounded-lg flex flex-col p-4 pt-[21px] bg-neutral-800">
      <div className="px-2 pt-0 pb-4">
        <p className="text-center text-xl font-semibold text-yellow-400">Attempting Stack</p>
      </div>
      <div>
        {itemLists?.map((item) => <UnsolvedItem key={item.number} item={item}/>)}
      </div>    
      <div className="flex items-center justify-center">
        { itemLists &&
          <button className="btn btn-success btn-xs mt-2">Update</button>}
      </div>
    </div>
  )
}

export default AttemptedStack