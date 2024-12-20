import React from 'react';

function Footer({ tasks, filter, setFilter, clearCompletedTasks }) {
  const activeCount = tasks.filter(task => !task.completed).length;

  return (
    <footer className="footer">
      <div className="filters">
        <button 
          className={filter === 'All' ? 'active' : ''} 
          onClick={() => setFilter('All')}
        >
          All
        </button>
        <button 
          className={filter === 'Active' ? 'active' : ''} 
          onClick={() => setFilter('Active')}
        >
          Active
        </button>
        <button 
          className={filter === 'Completed' ? 'active' : ''} 
          onClick={() => setFilter('Completed')}
        >
          Completed
        </button>
      </div>
      <div className="task-actions">
        <span>{activeCount} tasks left</span>
        <button onClick={clearCompletedTasks}>Clear Completed</button>
      </div>
    </footer>
  );
}

export default Footer;