import React, { useEffect, useState, useContext } from 'react';
import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import TaskListContainer from '../../components/tasklist-container/TaskListContainer';
import Pagination from '../../components/pagination/Pagination';
import Button from '../../components/button/button';
import { LogOutIcon, Plus } from '../../assets/icons/index';
import PageContainer from '../../components/page-container/page-container';
import PocketBaseContext from '../../context/pocketbase/PocketBaseContext';
import { useParams } from 'react-router-dom';
import Filter from '../../components/filter/filter';
import getCookie from '../../lib/getCookie';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from './taskSlice';

export default function tasks() {
	const tasks = useSelector((state) => state.task.value);
	const filter = useSelector((state) => state.filter.value);
	const dispatch = useDispatch();
	const pb = useContext(PocketBaseContext);
	const paginationNumber = Number(useParams().pageNumber.slice(4));
	const userInfo = getCookie(document.cookie);

	const handleLogout = () => {
		document.cookie = `userToken=; expires=; path=/`;
		document.cookie = `userID=; expires=; path=/`;
		document.cookie = `userName=; expires=; path=/`;
		document.cookie = `userPassword=; expires=; path=/`;
	};

	useEffect(() => {
		dispatch(fetchTasks({ userID: userInfo[2], paginationNumber, filter }));
	}, [paginationNumber, filter]);

	return (
		<PageContainer>
			<Box>
				<BoxHeader
					leftIcon={[
						<LogOutIcon handleLogout={handleLogout} />,
						'/login',
					]}
					headingText={`${userInfo[0]}'s Tasks`}
				></BoxHeader>
				<Filter />

				<TaskListContainer></TaskListContainer>

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
							handleClick={() => {}}
							href={`/list/page`}
						/>
					)}

					<Button text={`Task`} icon={<Plus />} link="/create" />
				</div>
			</Box>
		</PageContainer>
	);
}
