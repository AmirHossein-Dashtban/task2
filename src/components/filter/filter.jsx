import './filter.css';
import { useState } from 'react';
import { FilterIcon } from '../../assets/icons/index';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/tasks/asyncActions';

export default function Filter() {
	const [showMenu, setShowMenu] = useState(false);
	const filter = useSelector((state) => state.filter.filter);
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
				<ul onClick={() => dispatch(changeFilter(''))} style={{ color: filter === '' && '#d0bcff' }}>All</ul>
				<ul onClick={() => dispatch(changeFilter(true))} style={{ color: filter === true && '#d0bcff' }}>Completed</ul>
				<ul onClick={() => dispatch(changeFilter(false))} style={{ color: filter === false && '#d0bcff' }}>Not Completed</ul>
			</li>
		</div>
	);
}
