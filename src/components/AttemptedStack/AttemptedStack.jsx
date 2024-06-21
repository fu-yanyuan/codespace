import UnsolvedItem from "./UnsolvedItem"

const AttemptedStack = () => {
  const itemLists = [
    {
      number: 111,
      title: 'test',
      difficulty: 'Easy'
    }
  ]

  return (
    <div className="rounded-lg flex w-full flex-col p-4 pt-[21px] bg-neutral-800">
      <div>
        <p className="text-center text-xl font-semibold text-yellow-400">Attempted Stack</p>
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