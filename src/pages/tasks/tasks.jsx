import React, { useEffect, useState } from 'react';
import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import TaskListContainer from '../../components/tasklist-container/TaskListContainer';
import Pagination from '../../components/pagination/Pagination';
import Button from '../../components/button/button';
import { LogOutIcon, Plus } from '../../assets/icons/index';
import PageContainer from '../../components/page-container/page-container';
import usePagination from '../../hooks/usePagination';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';

export default function tasks() {
	const authContext = useContext(AuthContext);
	const [tasks, setTasks] = useState([]);

	function handleToggleTask(taskID, isCompleted) {
		setTasks(
			tasks.map((task) => {
				if (task.id === taskID) {
					return [...tasks, isCompleted];
				} else {
					return task;
				}
			})
		);
	}

	useEffect(() => {
		const currentUserTasks = [
			{ id: 0, title: 'Go shopping', isCompleted: true, userID: 100 },
			{ id: 1, title: 'Go swimming', isCompleted: false, userID: 100 },
			{ id: 2, title: 'Go walking', isCompleted: true, userID: 100 },
			{ id: 3, title: 'Go out', isCompleted: false, userID: 100 },
			{ id: 4, title: 'Go running', isCompleted: false, userID: 100 },
			{ id: 5, title: 'Go hiking', isCompleted: false, userID: 101 },
			{ id: 6, title: 'do homework', isCompleted: true, userID: 101 },
			{
				id: 7,
				title: 'Go to the cinema',
				isCompleted: false,
				userID: 101,
			},
			{ id: 8, title: 'do the dishes', isCompleted: true, userID: 101 },
		];
		setTasks([...currentUserTasks]);
	}, []);

	const [
		paginatedItems,
		setItemsPerPage,
		paginationNumber,
		paginationCount,
		handleClick,
	] = usePagination(tasks, 3);

	return (
		<PageContainer>
			{authContext.userName !== '' ? (
				<Box>
					<BoxHeader
						leftIcon={[
							<LogOutIcon
								handleLogout={authContext.handleLogout}
							/>,
							'/login',
						]}
						headingText={`${authContext.userName}'s Tasks`}
					></BoxHeader>

					<TaskListContainer
						tasks={paginatedItems}
						onToggle={handleToggleTask}
					></TaskListContainer>

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

						<Button text={`Task`} icon={<Plus />} link="/create" />
					</div>
				</Box>
			) : (
				<Box>
					<BoxHeader
						leftIcon={[<LogOutIcon />, '/login']}
						headingText={`Create an account and then make tasks! :)`}
					></BoxHeader>
				</Box>
			)}
		</PageContainer>
	);
}
