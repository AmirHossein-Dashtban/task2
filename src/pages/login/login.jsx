import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import './login.css';
import { Close, Password } from '../../assets/icons';
import PageContainer from '../../components/page-container/page-container';

const Login = () => {
	return (
		<PageContainer>
			<Box>
				<BoxHeader headingText={'Task Manager'} />
				<div className='inputs-container'>
					<Input type={'text'} name={'username'} title={'Username'} icon={<Close />} />
					<Input type={'password'} name={'password'} title={'Password'} className={'password-input'} icon={<Password />} />
				</div>
				<Button text={'login'} type={'sumit'} />
			</Box>
		</PageContainer>
	);
};

export default Login;
