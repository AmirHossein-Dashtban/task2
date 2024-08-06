import './createTask.css';
import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import PageContainer from '../../components/page-container/page-container';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {
    const navigation = useNavigate();

    return <PageContainer>
        <Formik
            initialValues={{ name: '', priority: '' }}
            onSubmit={(values, { setSubmitting }) => {
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
                                className={'priority-input'} />
                        </div>

                        <Button text={'Create'} type={'sumit'} />
                    </Box>

                </form>
            )}
        </Formik>
    </PageContainer >
};

export default CreateTask;