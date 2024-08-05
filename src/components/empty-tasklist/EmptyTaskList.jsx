import React from 'react';
import './EmptyTaskList.css';
import { DocumentIcon } from '../../assets/icons/index';

export default function EmptyTaskList() {
	return (
		<section className="emptylist-container">
			<DocumentIcon />
			<p className="emptylist-text">Start with create a task</p>
		</section>
	);
}
