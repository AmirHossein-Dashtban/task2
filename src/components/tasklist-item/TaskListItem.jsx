import React from 'react';
import './TaskListItem.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleTask } from '../../redux/tasks/asyncActions';

export default function TaskList({ taskID, children, checked }) {
	const dispatch = useDispatch();
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
							dispatch(toggleTask(taskID, e.target.checked))
						}}
					/>
				</div>
			</li>
		</>
	);
}
