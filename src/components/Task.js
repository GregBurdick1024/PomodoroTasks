import { useState } from 'react';
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TickIcon from '@mui/icons-material/CheckCircleOutline';
import { Transition } from 'react-transition-group';

const Task = ({ task, index, handleEdit, handleDone, transitionStyles }) => {
	const listItem = {
		background: 'white',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: '#282c34',
		height: 48,
		padding: '0 30px',
		margin: '0 0 8px',
		justifyContent: 'center',
		transition: `transform 400ms ease-in, opacity 200ms ease-in`,
		opacity: 1,
	};
	const [done, setDone] = useState(false);
	const timeLeft = (task) => {
		return `${task.done} / ${task.pomo}`;
	};
	if (!task) {
		return <ListItem></ListItem>;
	} else {
		return (
			<Transition appear in={true} timeout={0} unmountOnExit>
				{(state) => (
					<ListItem
						style={{
							...listItem,
							...transitionStyles.listItem[state],
						}}>
						<ListItemIcon>
							<IconButton
								style={{
									color: task.complete
										? '#FE6B8B'
										: '#282c34',
								}}
								onClick={() => {
									setDone(!done);
									handleDone(index);
								}}>
								<TickIcon />
							</IconButton>
						</ListItemIcon>
						<ListItemText
							style={{
								textDecoration: task.complete
									? 'line-through'
									: 'none',
								color: task.complete ? 'grey' : null,
							}}
							primary={`${task.text}`}
						/>
						<ListItemText>{timeLeft(task)}</ListItemText>
						<IconButton onClick={() => handleEdit(task)} edge='end'>
							<MenuIcon />
						</IconButton>
					</ListItem>
				)}
			</Transition>
		);
	}
};

export default Task;
