import React, { useState, useEffect } from 'react';
import Inputbar from './Inputbar';
import TaskCard from './TaskCard';

const ViewPanel = () => {
    const [tasks, setTasks] = useState([]);
    const [showFinished, setShowFinished] = useState(true);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    const addTask = (task) => {
        const newTask = { id: Date.now(), task, done: false, sno: tasks.length + 1 };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const toggleTaskDone = (id) => {
        const updatedTasks = tasks.map(task => task.id === id ? { ...task, done: !task.done } : task);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const sortedTasks = tasks.sort((a, b) => a.done - b.done);

    return (
        <div>
            <Inputbar addTask={addTask} />
            <div className="container h-9vh bg-blue-400 p-4 min-h-[80vh] bl-rounded br-rounded">
                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        id="checkbox"
                        className="ml-1"
                        checked={showFinished}
                        onChange={() => setShowFinished(!showFinished)}
                    />
                    <label htmlFor="checkbox" className="text-white font-bold">
                        Finished Tasks
                    </label>
                </div>
                {sortedTasks.map((task, index) => (
                    showFinished || !task.done ? (
                        <TaskCard
                            key={task.id}
                            task={task}
                            toggleTaskDone={toggleTaskDone}
                            deleteTask={deleteTask}
                        />
                    ) : null
                ))}
            </div>
        </div>
    );
};

export default ViewPanel;
