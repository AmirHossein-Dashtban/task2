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
			style={{ display: 'flex', height: '100vh', width: '100vw' }}
		>
			<Box>
				<BoxHeader
					leftIcon={<LogOutIcon />}
					headingText={`Jenny's Task`}
				></BoxHeader>

				<TaskListContainer tasks={tasks}></TaskListContainer>

				<div
					style={{
						alignItems: 'center',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						marginTop: '4rem',
						width: '100%',
					}}
				>
					{tasks.length !== 0 && <Pagination />}

					<Button text={`Task`} icon={<Plus />} />
				</div>
			</Box>
		</section>
	);
}
