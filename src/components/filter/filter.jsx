import './filter.css';
import { useState } from 'react';
import { FilterIcon } from '../../assets/icons/index';
import { showAll, completed, unCompleted } from '../../pages/tasks/filterSlice';
import { useDispatch } from 'react-redux';

export default function Filter() {
	const [showMenu, setShowMenu] = useState(false);
	const dispatch = useDispatch();
	return (
		<div
			className="filter-container"
			onMouseLeave={() => setShowMenu(false)}
		>
			<button className="filter-button" onClick={() => setShowMenu(true)}>
				<FilterIcon />
			</button>
			<li
				className="filter-list"
				style={{ display: showMenu ? 'block' : 'none' }}
			>
				<ul onClick={() => dispatch(showAll())}>All</ul>
				<ul onClick={() => dispatch(completed())}>Completed</ul>
				<ul onClick={() => dispatch(unCompleted())}>Not Completed</ul>
			</li>
		</div>
	);
}
