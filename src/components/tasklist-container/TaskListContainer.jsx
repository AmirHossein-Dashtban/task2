import React from 'react';
import './TaskListContainer.css';
import TaskListItem from '../tasklist-item/TaskListItem';

export default function TaskListContainer({ tasks }) {
	return (
		<section className="tasklist-container">
			<ul className="tasklist">
				{tasks.map((task) => (
					<TaskListItem>{task.taskName}</TaskListItem>
				))}
			</ul>
		</section>
	);
}
