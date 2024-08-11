import React from 'react';
import './TaskListItem.css';
import { Link } from 'react-router-dom';

export default function TaskList({ taskID, onToggle, children, checked }) {
	return (
		<>
			<li className="tasklist-item">
				<div className="tasklist-item__right">
					<span className="tasklist-item__circle">A</span>
					<Link to={`/edit/${taskID}`}>{children}</Link>
				</div>

				<div className="tasklist-item__left">
					<input
						className="tasklist-item__checkbox"
						type="checkbox"
						checked={checked}
						onChange={(e) => {
							onToggle(taskID, e.target.checked);
						}}
					/>
				</div>
			</li>
		</>
	);
}
