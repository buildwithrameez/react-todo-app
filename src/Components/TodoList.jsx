import { MdCheck,MdDeleteForever } from "react-icons/md";
export const TodoList = ({data,key,onDelete}) => {
    return( 
            <li key={key} className='todo-item '>
                <span>{data}</span>
                    <button className='check-btn'>
                        <MdCheck />
                    </button>
                    <button className='delete-btn'>
                        <MdDeleteForever onClick={
                            () => onDelete(data)
                        }/>
                  </button>
            </li>
)};