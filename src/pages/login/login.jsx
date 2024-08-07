import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import './login.css';
import { Close, Password } from '../../assets/icons';
import PageContainer from '../../components/page-container/page-container';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { StateContext } from '../../data/data';
import { useContext } from 'react';

const Login = () => {
	const navigation = useNavigate();
	const states = useContext(StateContext);

	return (
		<PageContainer>
			<Formik
				initialValues={{ username: '', password: '' }}
				onSubmit={(values) => {
					const user = states[0].users.find((_user) => {
						return (
							_user.userName == values.username &&
							_user.password == values.password
						);
					});

					if (user) {
						localStorage.setItem(
							'userInfo',
							JSON.stringify({ ...user, password: 'HASHED!' })
						);
						navigation('/list/page1');
					} else {
					}
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
