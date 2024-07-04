const Bar = ( { difficulty, solved, total } ) => {
  const colors = {
      'Easy': ['#2db55d26', '#01B8A2'],
      'Medium': ['#ffb80026', '#FFC11F'],
      'Hard': ['#ef474326', '#EF4642']
  }

  const progress = Math.round((solved / total) * 100);

  return (
    <div className="rounded-lg h-[9px] w-[150px] xl:w-[200px]" style={{backgroundColor: colors[difficulty][0]}}>
      <div className="rounded-lg h-[9px]"
        style={{width: `${progress}%`, backgroundColor: colors[difficulty][1]}}
      ></div>
    </div>
  )
}

export default Bar