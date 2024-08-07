import React from 'react';
import './TaskListItem.css';

export default function TaskList({ taskID, onToggle, children, checked }) {
	console.log(checked);

	return (
		<>
			<li className="tasklist-item">
				<div className="tasklist-item__right">
					<span className="tasklist-item__circle">A</span>
					{children}
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
