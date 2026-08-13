import { useEffect, useState } from 'react';
import { MdCheck,MdDeleteForever } from "react-icons/md";
import '../Components/style.css'
export const ToDoComponent = () => {

    const [inputValue,setinputvalue] = useState("");
    const [submitValue,setsubmitValue] = useState([]);
    const [timeDate, settimeDate] = useState("");

    const handleInputValue = (value) => {
        setinputvalue(value)
    };

    const handleformSubmit = (event) => {
       event.preventDefault();

       if(!inputValue) return;
       if(submitValue.includes(inputValue)) 
        {
        return
        alert(`Your Task ${inputValue} already added 
        ${setinputvalue("")}
        `);
       
       }
       setsubmitValue((value) => [...value,inputValue]);

       setinputvalue("");
    };

    // Todo date and time
    // const now = new Date();
    // const formattedDate = now.toLocaleDateString();
    // const formattedTime = now.toLocaleTimeString();
 
    // const getDateTime = () => {
    // const now = new Date();
    // const formattedDate = now.toLocaleDateString();
    // const formattedTime = now.toLocaleTimeString();
    // };

    useEffect(() => {
    const interval =setInterval(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    settimeDate(`${formattedDate } - ${formattedTime}`)
    },1000);

    return () => clearInterval(interval);
    },[]);

    


    return <section className='todo-container'>
        <header>
            <h1>Todo List</h1>
             {/* for time and date */}
            <h2 className='date-time'>{timeDate}</h2> 
        </header>

        <section className='form'>
            <form onSubmit={handleformSubmit}>
                <div>
                    <input type="text" className='todo-input' autoComplete='off'
                    value={inputValue}
                    onChange={((event) => handleInputValue(event.target.value))}
                    />
                </div>

                <div>
                    <button className='todo-btn' type='submit'>Add Task </button>
                </div>
            </form>
        </section>
        {/* Section to show list Items */}
        <section className='myUnOrdList'>
           <ul>
            {
                submitValue.map((curr,index) => {
                   return <li key={index} className='todo-item '>
                         <span>{curr}</span>
                         <button className='check-btn'>
                            <MdCheck />
                        </button>
                         <button className='delete-btn'>
                            <MdDeleteForever />
                        </button>
                   </li>
                })
            }
           </ul>
        </section>
    </section>
};