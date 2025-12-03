import {useEffect, useState} from "react";
const Clock = () => {
    const [time, setTime] = useState("");

    useEffect(()=>{
        const updateTime = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2,'0');
            setTime(`${hours}:${minutes}`);
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    },[]);
  return (
    <h1 className="time">{time}</h1>
  )
}

export default Clock