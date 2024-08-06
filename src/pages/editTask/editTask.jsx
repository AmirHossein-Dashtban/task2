import './edittask.css';
import Box from '../../components/box-component/Box';
import BoxHeader from '../../components/box-header/BoxHeader';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import { ArrowRightIcon, Trash } from '../../assets/icons';
import PageContainer from '../../components/page-container/page-container';

const EditTak = () => {
	return (
		<PageContainer>
			<Box>
				<BoxHeader
					headingText={'Edit Task #1'}
					rightIcon={[<ArrowRightIcon />, '/list']}
					leftIcon={[
						<Trash />,
						() => {
							console.log('!deleted');
						},
					]}
				/>

				<div className="inputs-container">
					<Input type={'text'} name={'name'} title={'name'} />
					<Input
						type={'text'}
						name={'priority'}
						title={'priority'}
						className={'priority-input'}
					/>
				</div>

				<Button text={'Save'} type={'sumit'} />
			</Box>
		</PageContainer>
	);
};

export default EditTak;
