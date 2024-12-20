import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput('');
    }
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add details" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskInput;