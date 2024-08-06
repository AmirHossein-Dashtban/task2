import React, { useEffect, useState } from 'react';
import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import TaskListContainer from '../../components/tasklist-container/TaskListContainer';
import Pagination from '../../components/pagination/Pagination';
import Button from '../../components/button/button';
import { LogOutIcon, Plus } from '../../assets/icons/index';
import PageContainer from '../../components/page-container/page-container';
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

	useEffect(() => {
		const info = { ...JSON.parse(localStorage.getItem('userInfo')) };
		const currentUserTasks = userTasks.filter(
			(task) => task.userID === info.id
		);
		setUserInfo(info);
		setTasks([...currentUserTasks]);
		console.log(userInfo);
	}, []);
	console.log(userInfo);

	return (
		<PageContainer>
			<Box>
				{/* {console.log(userInfo.userName)} */}
				<BoxHeader
					leftIcon={[<LogOutIcon />, '/login']}
					headingText={`${userInfo.userName}'s Tasks`}
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
