import { ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';

//styled component to define hover class

const AddTask = styled(ListItem)({
	opacity: 0.5,
	border: 'dashed 2px',
	borderRadius: 3,
	height: 48,
	justifyContent: 'center',
	'&:hover': {
		opacity: 1,
	},
	transition: `all 0.3s ease`,
});

export default AddTask;
