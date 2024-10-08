import { formatDistanceToNow, parseISO } from 'date-fns';
import React from 'react'

const TimeAgo = ({timestamp}) => {

    let timeAgo = ' ';

    if(timestamp){
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date);
        timeAgo =`${timePeriod} ago` ;    
    }

  return (

    <>
    <span className='timestamp text-[#F7F7F8]'>
       <i>{timeAgo}</i>
    </span>


    </>
  )
}

export default TimeAgo