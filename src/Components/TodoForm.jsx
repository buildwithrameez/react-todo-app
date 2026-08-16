import { useState } from "react";
export const TodoForm = ({onAddTodo}) => {
    const [inputValue,setinputvalue] = useState("");

    const handleInputValue = (value) => {
        setinputvalue(value)
    };

    const handleformSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setinputvalue("");
    };

    return (
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
    )
};