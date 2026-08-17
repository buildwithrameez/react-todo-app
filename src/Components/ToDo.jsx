import '../Components/style.css'
import { useState } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { DateTime } from './TodoDateTime';


export const ToDoComponent = () => {
    const [submitValue,setsubmitValue] = useState([]);
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
            <DateTime /> 
        </header>

{/*Form Section */}
        <TodoForm onAddTodo = {handleformSubmit}/>

{/* Section to show list Items */}
        <section className='myUnOrdList'>
           <ul>
            {
                submitValue.map((curr,index) => {

                   return <TodoList  data ={curr} key={index} onDelete = {
                    handleDeleteClick
                   }/>
                   
                })
            }
           </ul>
        </section>

        <section>
            <button className='clear-btn' onClick={() => handleClearList()}>Clear all</button>
            
        </section>
    </section>
};