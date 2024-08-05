import React, { useState } from 'react';
import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import TaskListContainer from '../../components/tasklist-container/TaskListContainer';
import Pagination from '../../components/pagination/Pagination';
import Button from '../../components/button/button';
import { LogOutIcon, Plus } from '../../assets/icons/index';

export default function tasks() {
	const [tasks, setTasks] = useState([
		{ taskName: 'Task #1' },
		{ taskName: 'Task #2' },
		{ taskName: 'Task #3' },
	]);

	return (
		<section
			className="page-container"
			style={{
				alignItems: 'center',
				display: 'flex',
				justifyContent: 'center',
				width: '100%',
			}}
		>
			<Box>
				<BoxHeader
					leftIcon={<LogOutIcon />}
					headingText={`Jenny's Task`}
				></BoxHeader>

				<TaskListContainer tasks={tasks}></TaskListContainer>

				<Pagination />

				<Button text={`Task`} icon={<Plus />} />
			</Box>
		</section>
	);
}
