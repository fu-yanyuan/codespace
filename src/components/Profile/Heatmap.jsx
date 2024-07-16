import ActivityCalendar from 'react-activity-calendar'
import { Tooltip as MuiTooltip } from '@mui/material'
import { useState, useEffect } from 'react'
import { getCalendarData } from '../../firebase/firestore'

const Heatmap = ({ days }) => {
  const [calendarData, setCalendarData] = useState(null)

  const getRangeDate = (n) => {
    const today = new Date();
  
    // Get the current date in yyyy-mm-dd format
    const currentYear = today.getFullYear();
    const currentMonth = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const currentDate = String(today.getDate()).padStart(2, '0');
    const currentDateStr = `${currentYear}-${currentMonth}-${currentDate}`;

    // Calculate the date 365 days ago
    const pastDate = new Date(today);
    pastDate.setDate(pastDate.getDate() - n);
    const pastYear = pastDate.getFullYear();
    const pastMonth = String(pastDate.getMonth() + 1).padStart(2, '0');
    const pastDay = String(pastDate.getDate()).padStart(2, '0');
    const pastDateStr = `${pastYear}-${pastMonth}-${pastDay}`;

    return {
      pastDateStr,
      currentDateStr
    }
  }

  const fetchData = async () => {
    try {
      const range = getRangeDate(days)
      const data = await getCalendarData(range.pastDateStr)

      if (data.length === 0 || data[0].date !== range.pastDateStr) {
        // Add a new element at the beginning of the list if the date does not match
        data.unshift({ date: range.pastDateStr, coutn: 0, level: 0 });
      }
      // check if today is in the list
      if (data.length === 0 || data[data.length - 1].date !== range.currentDateStr) {
        // Append the new object with the target date and c: 0
        data.push({ date: range.currentDateStr, count: 0, level: 0});
      }
      // console.log(data)
      setCalendarData(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="rounded-lg h-auto w-full bg-neutral-800">
      <div className="h-[180px] min-h-[180px] w-full p-[16px] pt-[14px]">
        {calendarData && 
          <ActivityCalendar
            data={calendarData}
            renderBlock={(block, activity) => (
              <MuiTooltip title={`${activity.count} activities on ${activity.date}`}>
                {block}
              </MuiTooltip>
            )}
            theme={{
              light: ['#383838', '#838A2D', '#7DB9B6', '#E96479', '#F5E9CF'],
              dark: ['#383838', '#838A2D', '#7DB9B6', '#E96479', '#F5E9CF'],
            }}
        />}
    
      </div>
    </div>
  )
}

export default Heatmap