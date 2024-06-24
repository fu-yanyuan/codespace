import ActivityCalendar from 'react-activity-calendar'
import { Tooltip as MuiTooltip } from '@mui/material'
import { useState, useEffect } from 'react'
import { getCalendarData } from '../../firebase'

const calendarData2 = [
  {
    date: "2023-06-20",
    count: 16,
    level: 3,
    solved: 16
  },
  {
    date: "2024-06-20",
    count: 16,
    level: 3,
    attempt: 16
  }
]

const Heatmap = () => {
  const [calendarData, setCalendarData] = useState(null)

  const calcLevel = (value) => {
    if (value === 0) {
      return 0
    } else if (value > 0 && value < 3) {
      return 1
    } else if (value >= 3 && value < 5) {
      return 2
    } else if (value >= 5 && value < 7) {
      return 3
    } else {
      return 4
    }
  }

  const getOneYearAgoDate = () => {
    // Get the current date
    const currentDate = new Date();
    // Subtract one year from the current date
    const pastYearDate = new Date();
    pastYearDate.setFullYear(currentDate.getFullYear() - 1);
  
    // Get the year, month, and day
    const year = pastYearDate.getFullYear();
    const month = String(pastYearDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
    const day = String(pastYearDate.getDate()).padStart(2, '0');
  
    // Format the date as 'yyyy-mm-dd'
    return `${year}-${month}-${day}`;
  }

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
      const range = getRangeDate(365)
      console.log(range)
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
      <div className="h-[180px] min-h-[180px] w-full pl-[36px] pt-[14px]">
        {calendarData && 
          <ActivityCalendar
            data={calendarData}
            renderBlock={(block, activity) => (
              <MuiTooltip title={`${activity.count} activities on ${activity.date}`}>
                {block}
              </MuiTooltip>
            )}
            theme={{
              light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
              dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
            }}
        />}
    
      </div>
    </div>
  )
}

export default Heatmap