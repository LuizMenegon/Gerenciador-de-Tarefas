import {ChevronRightIcon, DeleteIcon, TrashIcon} from 'lucide-react'
import { useNavigate } from 'react-router-dom';

function Tasks(props) {
    console.log(props)
    
    const navigate = useNavigate();

    function onSeeDetalhesClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
    }

    return( 
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {props.tasks.map((task) => 
        <li key={task.id} className="flex gap-2">
        <button 
        onClick={() => props.onTaskClick(task.id)} 
        className={"bg-slate-400 hover:bg-slate-500 cursor-pointer text-left w-full text-white p-2 rounded-md" + (task.isCompleted ? " line-through" : "")}>{task.title}</button>
        <button onClick={() => onSeeDetalhesClick(task)} className="bg-slate-400 hover:bg-slate-500 cursor-pointer p-2 rounded-md text-white">
            <ChevronRightIcon/>
        </button>
        <button 
        onClick={() => props.onDeleteTaskClick(task.id)} 
        className="bg-slate-400 hover:bg-slate-500 cursor-pointer p-2 rounded-md text-white">
            <TrashIcon/>
        </button>
        </li>)}
    </ul>
);
}
export default Tasks