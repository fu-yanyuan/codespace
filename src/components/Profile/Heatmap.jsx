import ActivityCalendar from 'react-activity-calendar'
import { Tooltip as MuiTooltip } from '@mui/material'

const calendarData = [
  {
    date: "2023-06-20",
    count: 16,
    level: 3
  },
  {
    date: "2024-06-20",
    count: 16,
    level: 3
  }
]

const Heatmap = () => {
  return (
    <div class="rounded-lg h-auto w-full bg-neutral-800">
      <div class="h-[180px] min-h-[180px] w-full pl-[36px] pt-[14px]">
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