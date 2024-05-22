import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

const Inputbar = ({ addTask }) => {
    const [inputTask, SetInputTask] = useState('');

    const handleChange = (event) => {
        SetInputTask(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputTask.trim()) {
            addTask(inputTask);
            SetInputTask(''); // Clear the input field
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="container bg-blue-400 p-2">
                    <input
                        placeholder="Enter Task here"
                        className="p-2 rounded"
                        type="text"
                        value={inputTask}
                        onChange={handleChange}
                    />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white text-center p-2 rounded ml-2">
                        Add
                    </button>
                  
                </div>
            </form>
        </div>
    );
};

export default Inputbar;
