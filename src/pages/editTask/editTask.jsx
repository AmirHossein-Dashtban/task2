import './edittask.css';
import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import { ArrowRightIcon, Trash } from '../../assets/icons';
import PageContainer from '../../components/page-container/page-container';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

const EditTak = () => {
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
                        <BoxHeader headingText={'Edit Task #1'} rightIcon={<ArrowRightIcon />} leftIcon={<Trash />} />
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

                        <Button text={'Save'} type={'sumit'} />
                    </Box>

                </form>
            )}
        </Formik>

    </PageContainer >
};

export default EditTak;
