import { useState } from 'react';
import '../Components/style.css'
export const ToDoComponent = () => {

    const [inputValue,setinputvalue] = useState("");
    const handleInputValue = (value) => {
        setinputvalue(value)
    };

    const handleformSubmit = (event) => {
       event.preventDefault()
    };

    return <section className='todo-container'>
        <header>
            <h1>Todo List</h1>
             {/* for time and date */}
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
    </section>
};