import React from "react";
import "./TaskListItem.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postTaskStatus } from "../../pages/tasks/taskSlice";

export default function TaskList({ taskID, children }) {
	const dispatch = useDispatch();
	const task = useSelector((state) =>
		state.task.value.find((task) => taskID === task.id)
	);

	const taskStatus = task.isCompleted;

	return (
		<>
			<li className='tasklist-item'>
				<div className='tasklist-item__right'>
					<span className='tasklist-item__circle'>A</span>
					<Link to={`/edit/${taskID}`}>{children}</Link>
				</div>

				<div className='tasklist-item__left'>
					<input
						className='tasklist-item__checkbox'
						type='checkbox'
						checked={taskStatus}
						onChange={(e) => {
							dispatch(
								postTaskStatus({
									taskID,
									isCompleted: e.target.checked,
								})
							);
						}}
					/>
				</div>
			</li>
		</>
	);
}
