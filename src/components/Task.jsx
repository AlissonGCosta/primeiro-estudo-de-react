import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg'

import "./Task.css";

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
    return (
        <div className='task-container' 
        style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="button-container">
                <button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}>
                    <CgClose />
                </button>

                <button className="see-task-details-button" 
                    onClick={()=>{}}>
                    <CgInfo />
                </button>

            </div>
        </div>
    )
    
    //return <div className = 'task-container'>
       // {task.title}
    //</div>;
}
 
export default Task;