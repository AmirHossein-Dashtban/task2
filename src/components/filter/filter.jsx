import './filter.css';
import { useState } from 'react';
import { FilterIcon } from '../../assets/icons/index';

export default function Filter({ setFilter }) {
    const [showMenu, setShowMenu] = useState(false);

    return <div className='filter-container' onMouseLeave={() => setShowMenu(false)}>
        <button className="filter-button" onClick={() => setShowMenu(true)}>
            <FilterIcon />
        </button>
        <li className='filter-list' style={{ display: showMenu ? 'block' : 'none' }}>
            <ul onClick={() => setFilter(null)}>All</ul>
            <ul onClick={() => setFilter(true)}>Completed</ul>
            <ul onClick={() => setFilter(false)}>Not Completed</ul>
        </li>
    </div>
};