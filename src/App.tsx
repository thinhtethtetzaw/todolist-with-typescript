import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import { ITaskProps } from './Interfaces';

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todos, setTodos] = useState<ITaskProps[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  }

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline }
    setTodos([...todos, newTask]);
  }

  const deleteTask = (deleteTaskItem : string): void => {
    setTodos(todos.filter((taskItem)=>{
      return taskItem.taskName !== deleteTaskItem
    }))
  }

  console.log("testing");

  return (
    <div className="App">
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <div className='flex mb-8 gap-3'>
          <div className='space-x-3'>
            <input type="text" name="task" className='border border-gray-200 p-1 px-2 rounded-md outline-none' placeholder='Write Something' onChange={handleChange} />
            <input type="number" name="deadline" className='border border-gray-200 p-1 px-2 rounded-md outline-none' placeholder='Deadline...' onChange={handleChange} />
          </div>
          <button className='bg-indigo-400 text-white p-1 px-2 rounded-md' onClick={addTask}>Add Task</button>
        </div>
        <div className='w-full px-[22.6rem]'>
          {todos.map((item: ITaskProps, index: number) => {
            return <ToDoList key={index} task={item} completeTask={deleteTask} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
