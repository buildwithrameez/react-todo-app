import { useEffect, useState } from 'react';
import { MdCheck,MdDeleteForever } from "react-icons/md";
import '../Components/style.css'
import { TodoForm } from './TodoForm';

export const ToDoComponent = () => {

    
    const [submitValue,setsubmitValue] = useState([]);
    const [timeDate, settimeDate] = useState("");

     const handleformSubmit = (inputValue) => {
           if(!inputValue) return;
           if(submitValue.includes(inputValue)) return;
        //     {
        //     return
        //     alert(`Your Task ${inputValue} already added 
        //     ${setinputvalue("")}
        //     `);
           
        //    }
           setsubmitValue((value) => [...value,inputValue]);
    
         
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

    // Function to Delete the list itme
    const handleDeleteClick = (text) => {
        const updateList =  submitValue.filter((curr) => curr !== text);
        setsubmitValue(updateList);

    };

    // clear all list
    const handleClearList = () => {

        if (submitValue.length === 0) {
        alert("List is already empty!");
        return;
        }    

        const confirmDelete = window.confirm("Are you sure you want to delete all items?");
  
       if (confirmDelete) {
       setsubmitValue([]);
       }
       
    };


    return <section className='todo-container'>
        <header>
            <h1>Todo List</h1>
             {/* for time and date */}
            <h2 className='date-time'>{timeDate}</h2> 
        </header>

{/*Form Section */}
        <TodoForm onAddTodo = {handleformSubmit}/>
        {/* Section to show list Items */}
        <section className='myUnOrdList'>
           <ul>
            {
                submitValue.map((curr,index) => {

                   return <li key={index} className='todo-item '>
                         <span>{curr}</span>
                         <button className='check-btn'>
                            <MdCheck onClick={() => handleComClick(curr)}/>
                        </button>
                         <button className='delete-btn'>
                            <MdDeleteForever onClick={
                                () => handleDeleteClick(curr)
                            }/>
                        </button>
                   </li>
                })
            }
           </ul>
        </section>

        <section>
            <button className='clear-btn' onClick={() => handleClearList()}>Clear all</button>
            
        </section>
    </section>
};