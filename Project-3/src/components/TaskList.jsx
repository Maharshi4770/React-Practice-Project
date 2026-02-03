import './TaskList.css';

// const tasks = [
//   {
//     title: 'Redesign Marketing Website',
//     project: 'Brand Identity',
//     status: 'Running',
//     priority: 'High',
//     dueDate: 'Oct 28, 2023',
//   },
//   {
//     title: 'Update API Documentation',
//     project: 'Backend V2',
//     status: 'Pending',
//     priority: 'Medium',
//     dueDate: 'Nov 02, 2023',
//   },
//   {
//     title: 'Client Feedback Session',
//     project: 'Enterprise App',
//     status: 'Completed',
//     priority: 'High',
//     dueDate: 'Oct 24, 2023',
//   },
//   {
//     title: 'Security Audit',
//     project: 'Infrastructure',
//     status: 'Running',
//     priority: 'Low',
//     dueDate: 'Nov 15, 2023',
//   },
// ];

const TaskList = (props) => {
  return (
    <div className="task-container">
      <h2 className="task-title">Active Tasks</h2>

      <div className="task-table">
        <div className="task-header">
          <span>Task Title</span>
          <span>Status</span>
          <span>Priority</span>
          <span>Due Date</span>
        </div>

        {props.tasks.map((task, index) => (
          <div className="task-row" key={index}>
            <div className="task-info">
              <p className="task-name">{task.title}</p>
            </div>

            <span className={`status ${task.status.toLowerCase()}`}>
              {task.status}
            </span>

            <span className={`priority ${task.priority.toLowerCase()}`}>
              {task.priority}
            </span>

            <span className="due-date">{task.date}</span>

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
