import { useState } from 'react';
import Button from './src/components/Button';
import TaskItem from './src/components/TaskItem';
import UserProfile from './src/components/UserProfile';
import { getVisibleTasks } from './src/utils/filterHelper';
import useFetchData from './src/hooks/useFetchData';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');
  const { tasks, loading } = useFetchData();
  const visibleTasks = getVisibleTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name="Mikhail" />

      <div>
        <Button onClick={() => setFilter('all')}>All</Button>
        <Button onClick={() => setFilter('completed')}>Completed</Button>
        <Button onClick={() => setFilter('pending')}>Pending</Button>
        <p>Current filter: {filter}</p>
      </div>

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
