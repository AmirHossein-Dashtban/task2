import React from 'react';
import './FilteredTaskList.css';
import { FilterIcon } from '../../assets/icons/index';
import TaskListItem from '../tasklist-item/TaskListItem';

export default function FilteredTaskList({ tasks }) {
	return (
		<section className=".tasklist-container">
			<div className="tasklist-icon">
				<FilterIcon />
			</div>
			{tasks.length ? (
				<ul className="tasklist">
					{tasks.map((task) => (
						<TaskListItem>{task.taskName}</TaskListItem>
					))}
				</ul>
			) : (
				<EmptyTaskList />
			)}
		</section>
	);
}
