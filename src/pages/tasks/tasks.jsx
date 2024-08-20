import React, { useEffect, useContext } from 'react';
import Box from '../../components/box-component/Box';
import { useSelector, useDispatch } from 'react-redux'
import BoxHeader from '../../components/box-header/BoxHeader';
import TaskListContainer from '../../components/tasklist-container/TaskListContainer';
import Pagination from '../../components/pagination/Pagination';
import Button from '../../components/button/button';
import { LogOutIcon, Plus } from '../../assets/icons/index';
import PageContainer from '../../components/page-container/page-container';
import PocketBaseContext from '../../context/pocketbase/PocketBaseContext';
import Filter from '../../components/filter/filter';
import getCookie from '../../lib/getCookie';
import { fetchData } from '../../redux/tasks/asyncActions';

export default function tasks() {
	const pb = useContext(PocketBaseContext);
	const userInfo = getCookie(document.cookie);
	const tasks = useSelector((state) => state.tasks.list);
	const dispatch = useDispatch();
	const filter = useSelector((state) => state.filter.filter);
	const page = useSelector((state) => state.page.page);


	const handleLogout = () => {
		document.cookie = `userToken=; expires=; path=/`;
		document.cookie = `userID=; expires=; path=/`;
		document.cookie = `userName=; expires=; path=/`;
		document.cookie = `userPassword=; expires=; path=/`;
	};

	useEffect(() => {
		dispatch(fetchData(filter, page));
	}, [filter, page]);


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

				<TaskListContainer />

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
						<Pagination />
					)}

					<Button text={`Task`} icon={<Plus />} link="/create" />
				</div>
			</Box>
		</PageContainer>
	);
}
