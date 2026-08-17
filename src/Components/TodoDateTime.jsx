import { useEffect } from "react";
import { useState } from "react";

export const DateTime = () => {
    
    const [timeDate, settimeDate] = useState("");

    useEffect(() => {
    const interval =setInterval(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    settimeDate(`${formattedDate } - ${formattedTime}`)
    },1000);

    return () => clearInterval(interval);
    },[]);


    return <h2 className='date-time'>{timeDate}</h2> 
};