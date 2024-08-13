import './edittask.css';
import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import { ArrowRightIcon, Trash } from '../../assets/icons';
import PageContainer from '../../components/page-container/page-container';
import { Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import PocketBaseContext from '../../context/pocketbase/PocketBaseContext';
import { useContext } from 'react';

const EditTak = () => {
	const pb = useContext(PocketBaseContext);
	const navigation = useNavigate();
	const taskID = useParams().taskID;

	const handleDelete = async () => {
		await pb.collection('tasks').delete(taskID);
		navigation('/list/page1');
	};

	return (
		<PageContainer>
			<Formik
				initialValues={{ name: '', priority: '' }}
				onSubmit={async (values, { setSubmitting }) => {
					console.log(values);

					const data = {
						title: values.name,
						priority: values.priority,
					};
					const record = await pb
						.collection('tasks')
						.update(taskID, data);
					navigation('/list/page1');
				}}
			>
				{({ handleBlur, handleChange, handleSubmit, values }) => (
					<form onSubmit={handleSubmit}>
						<Box>
							<BoxHeader
								headingText={`Edit Task #${taskID.slice(0, 2)}`}
								rightIcon={[<ArrowRightIcon />, '/list/page1']}
								leftIcon={[
									<Trash handleDelete={handleDelete} />,
								]}
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

							<Button text={'Save'} type={'submit'} />
						</Box>
					</form>
				)}
			</Formik>
		</PageContainer>
	);
};

export default EditTak;
