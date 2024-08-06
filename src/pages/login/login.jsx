import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import './login.css';
import { Close, Password } from '../../assets/icons';
import PageContainer from '../../components/page-container/page-container';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigation = useNavigate();
	return (
		<PageContainer>

			<Formik
				initialValues={{ username: '', password: '' }}
				onSubmit={(values) => {
					navigation('/list');
				}}
			>
				{({
					handleBlur,
					handleChange,
					handleSubmit,
					values
				}) => (
					<form onSubmit={handleSubmit}>
						<Box>

							<BoxHeader headingText={'Task Manager'} />

							<div className='inputs-container'>
								<Input
									type={'text'}
									name={'username'}
									title={'Username'}
									icon={<Close />}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.username} />
								<Input
									className={'password-input'}
									type={'password'}
									name={'password'}
									title={'Password'}
									icon={<Password />}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password} />
							</div>
							<Button text={'login'} type={'sumit'} />
						</Box>

					</form>
				)}
			</Formik>

		</PageContainer>
	);
};

export default Login;
