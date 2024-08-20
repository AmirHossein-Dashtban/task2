import React from 'react';
import './TaskListContainer.css';
import TaskListItem from '../tasklist-item/TaskListItem';
import EmptyTaskList from '../empty-tasklist/EmptyTaskList';
import { useSelector } from 'react-redux';

export default function TaskListContainer() {
	const tasks = useSelector((state) => state.tasks.list);
	return (
		<section className="tasklist-container">
			{tasks.length ? (
				<ul className="tasklist">
					{tasks.map((task) => (
						<TaskListItem
							taskID={task.id}
							key={task.id}
							checked={task.isCompleted}
						>
							{task.title}
						</TaskListItem>
					))}
				</ul>
			) : (
				<EmptyTaskList />
			)}
		</section>
	);
}
