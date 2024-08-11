import React, { useEffect, useState, useContext } from 'react';
import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import TaskListContainer from '../../components/tasklist-container/TaskListContainer';
import Pagination from '../../components/pagination/Pagination';
import Button from '../../components/button/button';
import { LogOutIcon, Plus } from '../../assets/icons/index';
import PageContainer from '../../components/page-container/page-container';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';
import PocketBaseContext from '../../context/pocketbase/PocketBaseContext';
import { useParams } from 'react-router-dom';
import Filter from '../../components/filter/filter';

export default function tasks() {
  const authContext = useContext(AuthContext);
	const pb = useContext(PocketBaseContext);
	const paginationNumber = Number(useParams().pageNumber.slice(4));
	const [userInfo, setUserInfo] = useState({
		id: '',
		userName: '',
		password: '',
	});
	const [tasks, setTasks] = useState([]);
	const [totalPage, setTotalPage] = useState(0);
	const [filter, setFilter] = useState(null);

	async function handleToggleTask(taskID, isCompleted) {
		try {
			await pb.collection('tasks').update(taskID, { 'isCompleted': isCompleted })
		} finally {
			GetTasks();
		}
	};

	async function GetTasks() {
		const resultList = await pb.collection('tasks').getList(paginationNumber, 3, {
			filter: filter === null ? '' : `isCompleted = ${filter}`,
		});
		setTasks(resultList.items);
		setTotalPage(resultList.totalPages);
	};

	useEffect(() => {
		GetTasks();
	}, [paginationNumber, filter]);


	return (
		<PageContainer>
  {authContext.userName !== '' ? (
			<Box>
				<BoxHeader
					leftIcon={[<LogOutIcon={authContext.handleLogout} />, '/login']}
					headingText={`${authContext.userName}'s Tasks`}
				></BoxHeader>
				<Filter setFilter={setFilter} />

				<TaskListContainer
					tasks={tasks}
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
							paginationCount={totalPage}
							handleClick={() => { }}
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
