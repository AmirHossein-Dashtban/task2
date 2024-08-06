import React, { useState } from 'react';
import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import TaskListContainer from '../../components/tasklist-container/TaskListContainer';
import Pagination from '../../components/pagination/Pagination';
import Button from '../../components/button/button';
import { LogOutIcon, Plus } from '../../assets/icons/index';
import PageContainer from '../../components/page-container/page-container';

export default function tasks() {
	const [tasks, setTasks] = useState([]);

	return (
		<PageContainer>
			<Box>
				<BoxHeader
					leftIcon={[<LogOutIcon />, '/login']}
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

					<Button text={`Task`} icon={<Plus />} link="/create" />
				</div>
			</Box>
		</PageContainer>
	);
}
