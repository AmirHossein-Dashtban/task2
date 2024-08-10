import React, { useEffect, useState } from 'react';
import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import TaskListContainer from '../../components/tasklist-container/TaskListContainer';
import Pagination from '../../components/pagination/Pagination';
import Button from '../../components/button/button';
import { LogOutIcon, Plus } from '../../assets/icons/index';
import PageContainer from '../../components/page-container/page-container';
import usePagination from '../../hooks/usePagination';
import { StateContext } from '../../data/data';
import { useContext } from 'react';

export default function tasks() {
	const [userInfo, setUserInfo] = useState({
		id: '',
		userName: '',
		password: '',
	});
	const [tasks, setTasks] = useState([]);
	const states = useContext(StateContext);
	const userTasks = states[1].tasks;

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
		const info = { ...JSON.parse(localStorage.getItem('userInfo')) };
		const currentUserTasks = userTasks.filter(
			(task) => task.userID === info.id
		);
		setUserInfo(info);
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
			<Box>
				<BoxHeader
					leftIcon={[<LogOutIcon />, '/login']}
					headingText={`${userInfo.userName}'s Tasks`}
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
		</PageContainer>
	);
}
