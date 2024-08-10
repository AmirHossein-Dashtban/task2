import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageContainer from '../../components/page-container/page-container';
import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import { Close, Password } from '../../assets/icons';
import { Formik } from 'formik';
import PocketBaseContext from '../../context/pocketbase/PocketBaseContext';
import './login.css';
import { AuthContext } from '../../context/auth/AuthContext';

const Login = () => {
	const navigation = useNavigate();
	const pb = useContext(PocketBaseContext);
	const authContext = useContext(AuthContext);

	return (
		<PageContainer>
			<Formik
				initialValues={{ username: '', password: '' }}
				onSubmit={async (values) => {
					try {
						const authData = await pb
							.collection('users')
							.authWithPassword(values.username, values.password);

						document.cookie = `userToken=${pb.authStore.token}; expires=; path=/`;
						document.cookie = `userID=${pb.authStore.model.id}; expires=; path=/`;
						document.cookie = `userName=${values.username}; expires=; path=/`;
						document.cookie = `userPassword=${values.password}; expires=; path=/`;

						authContext.setIsLogin(true);
						navigation('/list/page1');
					} catch (error) {
						console.log(error);
					}

					pb.authStore.clear();
				}}
			>
				{({ handleBlur, handleChange, handleSubmit, values }) => (
					<form onSubmit={handleSubmit}>
						<Box>
							<BoxHeader headingText={'Task Manager'} />

							<div className="inputs-container">
								<Input
									type={'text'}
									name={'username'}
									title={'Username'}
									icon={<Close />}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.username}
								/>
								<Input
									className={'password-input'}
									type={'password'}
									name={'password'}
									title={'Password'}
									icon={<Password />}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
								/>
							</div>
							<Button text={'login'} type={'submit'} />
						</Box>
					</form>
				)}
			</Formik>
		</PageContainer>
	);
};

export default Login;
