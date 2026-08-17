import { MdCheck,MdDeleteForever } from "react-icons/md";
export const TodoList = ({data,onDelete,onhandleClick,checked}) => {
    return( 
            <li className='todo-item '>
                <span className={ checked ? "checkList" : "notCheckList" }>{data}</span>
                    <button className='check-btn' onClick={() => onhandleClick(data)}>
                        <MdCheck />
                    </button>
                    <button className='delete-btn' onClick={
                        () => onDelete(data)}>
                        <MdDeleteForever />
                  </button>  
            </li>
)};