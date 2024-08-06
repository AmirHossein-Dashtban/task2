import React, { useState } from 'react';
import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import TaskListContainer from '../../components/tasklist-container/TaskListContainer';
import Pagination from '../../components/pagination/Pagination';
import Button from '../../components/button/button';
import { LogOutIcon, Plus } from '../../assets/icons/index';
import PageContainer from '../../components/page-container/page-container';

export default function tasks() {
	const [tasks, setTasks] = useState([
		{ taskName: 'Task #1' },
		{ taskName: 'Task #2' },
		{ taskName: 'Task #3' },
	]);

	return (
		<PageContainer>
			<Box>
				<BoxHeader
					leftIcon={<LogOutIcon />}
					headingText={`Jenny's Task`}
				></BoxHeader>

				<TaskListContainer tasks={tasks}></TaskListContainer>

				{tasks.length !== 0 && <Pagination />}

				<Button text={`Task`} icon={<Plus />} />
			</Box>
		</PageContainer>
	);
}
