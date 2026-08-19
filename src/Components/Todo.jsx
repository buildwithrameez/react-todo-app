import '../Components/Todo.css';
import { useState } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { DateTime } from './TodoDateTime';
import { getLocalDataFunc } from './TodoLocalStorage';
import { setLocalDataFunc } from './TodoLocalStorage';


export const ToDoComponent = () => {
    

    

    const [submitValue,setsubmitValue] = useState(() => 
        getLocalDataFunc());

     const handleformSubmit = (inputValue) => {
        const {id, content, checked} = inputValue;
          // if the content not added in inputfield
           if(!content) return;

        // For Array
        //    if(submitValue.includes(content)) return;
        //     {
        //     return
        //     alert(`Your Task ${inputValue} already added 
        //     ${setinputvalue("")}
        //     `);    
        //    }   

        
        // for object   
        const ifContentMatch = submitValue.find((currTask) => currTask.content === content);
        if (ifContentMatch) return;

        
        setsubmitValue((value) => [...value,{id, content, checked}]);
        };

    // Todo store data to Local Storage
    setLocalDataFunc(submitValue);

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
        const updateList =  submitValue.filter((curr) => curr.content !== text);
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

    //todo handleChecked Todo Tick
    const handleClickTick = (event) => {
      const updateTask = submitValue.map((curr) => {
        if (curr.content == event) {
            return {...curr,checked: !curr.checked}
        }else{
            return curr;
        }
      });
         setsubmitValue(updateTask);
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
                submitValue.map((curr) => {
                return <TodoList
                  data ={curr.content}
                   key={curr.id} 
                   checked= {curr.checked}
                   onDelete = {handleDeleteClick}
                   onhandleClick = {handleClickTick}
                />
                   
                })
            }
           </ul>
        </section>

        <section>
            <button className='clear-btn' onClick={() => handleClearList()}>Clear all</button>
            
        </section>
    </section>
};