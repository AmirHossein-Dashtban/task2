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
import PocketBaseContext from '../../context/PocketBaseContext';

const Login = () => {
	const navigation = useNavigate();
	const states = useContext(StateContext);
	const pb = useContext(PocketBaseContext);

	return (
		<PageContainer>
			<Formik
				initialValues={{ username: '', password: '' }}
				onSubmit={async (values) => {
					// const data = {
					// 	username: values.username,
					// 	email: 'negin@example.com',
					// 	emailVisibility: true,
					// 	password: values.password,
					// 	passwordConfirm: values.password,
					// 	name: values.username, // Ensure this field is included as it's required
					// };

					// try {
					// 	const record = await pb
					// 		.collection('users')
					// 		.create(data);
					// 	console.log('User created successfully:', record);

					// 	// (optional) send an email verification request
					// 	await pb
					// 		.collection('users')
					// 		.requestVerification('test@example.com');
					// } catch (error) {
					// 	console.error('Error creating user:', error); // This will show the detailed error message
					// }

					const authData = await pb
						.collection('users')
						.authWithPassword(values.username, values.password);

					// after the above you can also access the auth data from the authStore
					console.log(pb.authStore.isValid);
					console.log(pb.authStore.token);
					console.log(pb.authStore.model.id);

					// "logout" the last authenticated account
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
