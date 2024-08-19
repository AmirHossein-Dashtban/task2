import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../components/page-container/page-container";
import Box from "../../components/box-component/Box";
import BoxHeader from "../../components/box-header/BoxHeader";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { Close, Password } from "../../assets/icons";
import { Formik } from "formik";
import "./login.css";
import { userLogin } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
	const navigation = useNavigate();
	const [passwordInputType, setPasswordInputType] = useState("password");
	const status = useSelector((state) => state.userInfo.status);
	const dispatch = useDispatch();

	return (
		<PageContainer>
			<Formik
				initialValues={{ username: "", password: "" }}
				onSubmit={(values) => {
					dispatch(
						userLogin({
							userID: values.username,
							userPassword: values.password,
						})
					).then((res) => {
						res.type === "userInfo/login/fulfilled" &&
							navigation("/list/page1");
					});
				}}>
				{({
					handleBlur,
					handleChange,
					handleSubmit,
					values,
					setFieldValue,
				}) => (
					<form onSubmit={handleSubmit}>
						<Box>
							<BoxHeader headingText={"Task Manager"} />

							<div className='inputs-container'>
								{status === "rejected" && (
									<p style={{ color: "red" }}>
										Username or Password is incorrect!
									</p>
								)}
								<Input
									type={"text"}
									name={"username"}
									title={"Username"}
									icon={<Close />}
									handleClickIcon={() => {
										setFieldValue("username", "");
									}}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.username}
								/>
								<Input
									className={"password-input"}
									type={passwordInputType}
									name={"password"}
									title={"Password"}
									icon={<Password />}
									handleClickIcon={() => {
										setPasswordInputType(
											passwordInputType === "password"
												? "text"
												: "password"
										);
									}}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
								/>
							</div>
							<Button text={"login"} type={"submit"} />
						</Box>
					</form>
				)}
			</Formik>
		</PageContainer>
	);
};

export default Login;
