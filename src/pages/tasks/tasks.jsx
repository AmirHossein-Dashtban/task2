import React, { useEffect } from "react";
import Box from "../../components/box-component/Box";
import BoxHeader from "../../components/box-header/BoxHeader";
import TaskListContainer from "../../components/tasklist-container/TaskListContainer";
import Pagination from "../../components/pagination/Pagination";
import Button from "../../components/button/button";
import { LogOutIcon, Plus } from "../../assets/icons/index";
import PageContainer from "../../components/page-container/page-container";
import { useNavigate, useParams } from "react-router-dom";
import Filter from "../../components/filter/filter";
import getCookie from "../../lib/getCookie";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "./taskSlice";
import Loader from "../../components/loader/Loader";
import Alert from "../../components/alert/Alert";
import { logout } from "../login/userSlice";

export default function tasks() {
	const tasks = useSelector((state) => state.task.value);
	const filter = useSelector((state) => state.filter.value);
	const status = useSelector((state) => state.task.status);
	const showAlert = useSelector((state) => state.isShowAlert.isShow);
	const dispatch = useDispatch();
	const paginationNumber = Number(useParams().pageNumber.slice(4));
	const userInfo = getCookie(document.cookie);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchTasks({ userID: userInfo[2], paginationNumber, filter }));
	}, [paginationNumber, filter]);

	let content;

	if (status === "succeeded") {
		content = (
			<PageContainer>
				<Box>
					<BoxHeader
						leftIcon={[<LogOutIcon />, "/login"]}
						headingText={`${userInfo[0]}'s Tasks`}></BoxHeader>
					<Filter />

					<TaskListContainer></TaskListContainer>

					<div
						style={{
							alignItems: "center",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							marginTop: "4rem",
							width: "100%",
						}}>
						{tasks.length !== 0 && (
							<Pagination
								paginationNumber={paginationNumber}
								itemsperPage={3}
								handleClick={() => {}}
								href={`/list/page`}
							/>
						)}

						<Button text={`Task`} icon={<Plus />} link='/create' />
					</div>
				</Box>
			</PageContainer>
		);
	} else {
		content = <Loader />;
	}
	return !showAlert ? (
		content
	) : (
		<Alert
			alertText={"Are you sure to LOGOUT?"}
			yesDispatch={() => {
				dispatch(logout());
				navigate("/login");
			}}
		/>
	);
}
