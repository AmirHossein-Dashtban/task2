import './createTask.css';
import { useContext } from 'react';
import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import PageContainer from '../../components/page-container/page-container';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '../../assets/icons/index';
import PocketBaseContext from '../../context/pocketbase/PocketBaseContext';

const CreateTask = () => {
	const navigation = useNavigate();
	const pb = useContext(PocketBaseContext);

	async function AddTask(values) {
		await pb.collection('tasks').create({
			"title": values.name,
			"priority": values.priority,
			"isCompleted": false,
			"userId": "test"
		});
	};

	return (
		<PageContainer>
			<Formik
				initialValues={{ name: '', priority: '' }}
				onSubmit={(values, { setSubmitting }) => {
					AddTask(values)
					navigation('/list/page1');
				}}
			>
				{({ handleBlur, handleChange, handleSubmit, values }) => (
					<form onSubmit={handleSubmit}>
						<Box>
							<BoxHeader
								headingText={'Task Manager'}
								rightIcon={[<ArrowRightIcon />, '/list/page1']}
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

							<Button text={'Create'} type={'submit'} />
						</Box>
					</form>
				)}
			</Formik>
		</PageContainer>
	);
};

export default CreateTask;
