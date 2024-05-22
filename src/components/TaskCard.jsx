import React from 'react';

const TaskCard = ({ task, toggleTaskDone, deleteTask }) => {
    return (
        <div className={`container bg-blue-500 mt-4 p-4 text-white flex justify-between rounded ${task.done ? 'line-through' : ''}`}>
           
            <p>{task.task}</p>
            <div className="btns p-1 space-x-1 ">
                {!task.done ? (
                    <button
                        className='bg-green-200 hover:bg-green-500 p-1 rounded'
                        onClick={() => toggleTaskDone(task.id)}
                    >
                        Done
                    </button>
                ) : (
                    <button
                        className='bg-red-200 hover:bg-red-500 p-1 rounded'
                        onClick={() => toggleTaskDone(task.id)}
                    >
                        Undone
                    </button>
                )}
                <button
                    className='bg-red-200 hover:bg-red-500 p-1 rounded'
                    onClick={() => deleteTask(task.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskCard;
