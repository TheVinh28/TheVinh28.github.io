import React, { useState, useEffect } from 'react';
import Header from './components/common/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Footer from './components/common/Footer';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearCompletedTasks = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList 
        tasks={filteredTasks} 
        toggleTaskCompletion={toggleTaskCompletion} 
        deleteTask={deleteTask} 
      />
      <Footer 
        tasks={tasks} 
        filter={filter} 
        setFilter={setFilter} 
        clearCompletedTasks={clearCompletedTasks} 
      />
    </div>
  );
}

export default App;