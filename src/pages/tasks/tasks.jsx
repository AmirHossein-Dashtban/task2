import React, { useEffect, useState } from 'react';
import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import TaskListContainer from '../../components/tasklist-container/TaskListContainer';
import Pagination from '../../components/pagination/Pagination';
import Button from '../../components/button/button';
import { LogOutIcon, Plus } from '../../assets/icons/index';
import PageContainer from '../../components/page-container/page-container';
import usePagination from '../../hooks/usePagination';

export default function tasks() {
	const [tasks, setTasks] = useState([
		{ id: 0, title: 'Task #1', isCompleted: false },
		{ id: 1, title: 'Task #2', isCompleted: false },
		{ id: 2, title: 'Task #3', isCompleted: false },
		{ id: 3, title: 'Task #4', isCompleted: false },
		{ id: 4, title: 'Task #5', isCompleted: false },
	]);

	const [
		paginatedItems,
		setItemsPerPage,
		paginationNumber,
		paginationCount,
		handleClick,
	] = usePagination(tasks, 3);

	useEffect(() => {
		handleClick();
	}, []);

	// console.log(paginatedItems);
	// console.log(setItemsPerPage);
	// console.log(paginationNumber);
	// console.log(paginationCount);
	// console.log(handleClick);

	return (
		<PageContainer>
			<Box>
				<BoxHeader
					leftIcon={[<LogOutIcon />, '/login']}
					headingText={`Jenny's Task`}
				></BoxHeader>

				<TaskListContainer tasks={paginatedItems}></TaskListContainer>

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
					{tasks.length !== 0 && (
						<Pagination
							paginationNumber={paginationNumber}
							itemsperPage={3}
							paginationCount={paginationCount}
							handleClick={handleClick}
							href={`/list/page`}
						/>
					)}

					<Button text={`Task`} icon={<Plus />} />
				</div>
			</Box>
		</PageContainer>
	);
}
