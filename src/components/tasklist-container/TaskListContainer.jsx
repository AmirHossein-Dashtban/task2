import React from 'react';
import './TaskListContainer.css';
import TaskListItem from '../tasklist-item/TaskListItem';
import EmptyTaskList from '../empty-tasklist/EmptyTaskList';
import { useSelector } from 'react-redux';

export default function TaskListContainer({ onToggle }) {
	const tasks = useSelector((state) => state.task.value);
	return (
		<section className="tasklist-container">
			{tasks.length ? (
				<ul className="tasklist">
					{tasks.map((task) => (
						<TaskListItem
							onToggle={onToggle}
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
