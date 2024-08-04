import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import './login.css';

const Login = () => {
    return <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
        <Box>
            <BoxHeader headingText={'Task Manager'} />

            <div className='inputs-container'>
                <Input type={'text'} name={'username'} title={'Username'} />
                <Input type={'password'} name={'password'} title={'Password'} className={'password-input'} />
            </div>

            <Button text={'login'} type={'sumit'} />
        </Box>

    </div>
};

export default Login;