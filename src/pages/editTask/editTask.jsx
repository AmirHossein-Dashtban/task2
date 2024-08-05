import './edittask.css';
import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import { ArrowRightIcon, Trash } from '../../assets/icons';

const EditTak = () => {
    return <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
        <Box>
            <BoxHeader headingText={'Edit Task #1'} rightIcon={<ArrowRightIcon />} leftIcon={<Trash />} />

            <div className='inputs-container'>
                <Input type={'text'} name={'name'} title={'name'} />
                <Input type={'text'} name={'priority'} title={'priority'} className={'priority-input'} />
            </div>

            <Button text={'Save'} type={'sumit'} />
        </Box>

    </div>
};

export default EditTak;