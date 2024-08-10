import './edittask.css';
import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import { ArrowRightIcon, Trash, LogOutIcon } from '../../assets/icons';
import PageContainer from '../../components/page-container/page-container';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';

const EditTak = () => {
	const authContext = useContext(AuthContext);
	const navigation = useNavigate();
	return (
		<PageContainer>
			{authContext.isLogin ? (
				<Formik
					initialValues={{ name: '', priority: '' }}
					onSubmit={(values, { setSubmitting }) => {
						navigation('/list/page1');
					}}
				>
					{({ handleBlur, handleChange, handleSubmit, values }) => (
						<form onSubmit={handleSubmit}>
							<Box>
								<BoxHeader
									headingText={'Edit Task #1'}
									rightIcon={<ArrowRightIcon />}
									leftIcon={<Trash />}
								/>
								<div className="inputs-container">
									<Input
										type={'text'}
										name={'name'}
										title={'name'}
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.name}
									/>
									<Input
										type={'text'}
										name={'priority'}
										title={'priority'}
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.priority}
										className={'priority-input'}
									/>
								</div>

								<Button text={'Save'} type={'sumit'} />
							</Box>
						</form>
					)}
				</Formik>
			) : (
				<Box>
					<BoxHeader
						leftIcon={[<LogOutIcon />, '/login']}
						headingText={'Login into your account first!'}
					/>
				</Box>
			)}
		</PageContainer>
	);
};

export default EditTak;
