import "./edittask.css";
import Box from "../../components/box-component/Box";
import BoxHeader from "../../components/box-header/BoxHeader";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { ArrowRightIcon, Trash } from "../../assets/icons";
import PageContainer from "../../components/page-container/page-container";
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import PocketBaseContext from "../../context/pocketbase/PocketBaseContext";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask } from "../tasks/taskSlice";
import Alert from "../../components/alert/Alert";
import Loader from "../../components/loader/Loader";

const EditTak = () => {
	const pb = useContext(PocketBaseContext);
	const navigate = useNavigate();
	const taskID = useParams().taskID;
	const dispatch = useDispatch();
	const showAlert = useSelector((state) => state.isShowAlert.isShow);
	const status = useSelector((state) => state.task.status);

	let content = <Loader />;

	if (status === "succeeded" || "idle") {
		content = (
			<PageContainer>
				<Formik
					initialValues={{ name: "", priority: "" }}
					onSubmit={async (values, { setSubmitting }) => {
						dispatch(
							editTask({
								taskID,
								title: values.name,
								priority: values.priority,
							})
						);
						navigate(-1);
					}}>
					{({ handleBlur, handleChange, handleSubmit, values }) => (
						<form onSubmit={handleSubmit}>
							<Box>
								<BoxHeader
									headingText={`Edit Task #${taskID.slice(
										0,
										2
									)}`}
									rightIcon={[
										<ArrowRightIcon />,
										"/list/page1",
									]}
									leftIcon={[<Trash />, () => {}]}
								/>
								<div className='inputs-container'>
									<Input
										type={"text"}
										name={"name"}
										title={"name"}
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.name}
									/>
									<Input
										type={"text"}
										name={"priority"}
										title={"priority"}
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.priority}
										className={"priority-input"}
									/>
								</div>

								<Button text={"Save"} type={"submit"} />
							</Box>
						</form>
					)}
				</Formik>
			</PageContainer>
		);
	}

	return showAlert ? (
		<Alert
			alertText={"Are you sure you want to delete the task?"}
			yesDispatch={() =>
				dispatch(deleteTask({ taskID })).then((res) =>
					navigate("/list/page1")
				)
			}
		/>
	) : (
		content
	);
};

export default EditTak;
