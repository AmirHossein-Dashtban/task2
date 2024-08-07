import React from 'react';
import './TaskListContainer.css';
import TaskListItem from '../tasklist-item/TaskListItem';
import EmptyTaskList from '../empty-tasklist/EmptyTaskList';

export default function TaskListContainer({ tasks }) {
	return (
		<section className="tasklist-container">
			{tasks.length ? (
				<ul className="tasklist">
					{tasks.map((task) => (
						<TaskListItem key={task.id} checked={task.isCompleted}>
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
