import { useState } from 'react';
import './addTask.css';

const AddToTask = (props) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [date, setDate] = useState('');


  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  }

  const dateHandler = (e) => {
    setDate(e.target.value);
  }

  const statusChangeHanlder = (e) => {
    setStatus(e.target.value);
  }

  const prioritChangehandler = (e) => {
    setPriority(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const todoData = {
      title,
      status,
      priority,
      date
    }

    props.inputHandler(todoData);
    setTitle('');
    setStatus('');
    setPriority('');
    setDate('');

  }



  return (
    <form onSubmit={submitHandler}>
      <div className="add-task-container">
        <h3 className="add-task-title">Quick Add Task</h3>

        <div className="add-task-form">
          <div className="field">
            <label>Task Title</label>
            <input
              type="text"
              placeholder="e.g., Finalize design system specs"
              value={title}
              onChange={titleChangeHandler}
            />
          </div>

          <div className="field">
            <label>Status</label>
            <select value={status} onChange={statusChangeHanlder}>
              <option value="">-- Select --</option>
              <option value="Pending">Pending</option>
              <option value="Running">Running</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="field">
            <label>Priority</label>
            <select value={priority} onChange={prioritChangehandler}>
              <option value="">-- Select --</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="field">
            <label>Due Date</label>
            <input type="date" value={date} onChange={dateHandler} />
          </div>

          <button className="add-btn" type='submit'>
            <span>＋</span> Add Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddToTask;
