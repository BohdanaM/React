import { useState } from 'react';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div>
      <h1>Головна</h1>
      <form onSubmit={addTask}>
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Додати нову задачу"
        />
        <button type="submit">Додати</button>
      </form>

      <h2>Список задач</h2>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))
        ) : (
          <p>Список задач не заповнений</p>
        )}
      </ul>
    </div>
  );
}

export default Home;
