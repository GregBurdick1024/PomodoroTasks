import { ListItemIcon, List } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Task from './Task';
import AddTask from './AddTask';
import TaskForm from './TaskForm';
import { Transition } from 'react-transition-group';
import ListHeader from './ListHeader';

const Tasks = ({
	tasks,
	setTasks,
	setShowForm,
	showForm,
	text,
	pomo,
	setText,
	setPomo,
	selected,
	handleEdit,
	handleSubmit,
	handleDelete,
	handleDone,
}) => {
	const transitionStyles = {
		listItem: {
			entering: {
				transform: 'rotateX(-90deg)',
				opacity: 0,
			},
			entered: { transform: 'rotateX(0deg)', opacity: 1 },
			exiting: { opacity: 0 },
			exited: { opacity: 0 },
		},
		form: {
			entering: {
				opacity: 0,
				transform: 'scale(0)',
			},
			entered: { opacity: 1 },
			exiting: { opacity: 0 },
			exited: { display: 'none' },
		},
		addTask: {
			entering: {
				opacity: 0,
				transform: 'scale(0)',
			},
			entered: {},
			exiting: { opacity: 0 },
			exited: { display: 'none' },
		},
	};
	if (!tasks) return null;
	return (
		<div>
			<List>
				<ListHeader setTasks={setTasks} tasks={tasks} />
				{tasks.map((task, index) => (
					<Task
						key={index}
						index={index}
						task={task}
						handleEdit={handleEdit}
						handleDone={handleDone}
						transitionStyles={transitionStyles}
					/>
				))}
			</List>
			<Transition
				in={!showForm}
				timeout={{ enter: 1000, exit: 0 }}
				unmountOnExit>
				{(state) => (
					<AddTask
						button
						onClick={() => {
							setShowForm(true);
						}}
						style={{
							...transitionStyles.addTask[state],
						}}>
						<ListItemIcon>
							<AddCircleOutlineIcon style={{ color: 'white' }} />
						</ListItemIcon>
						Add Task
					</AddTask>
				)}
			</Transition>
			<TaskForm
				transitionStyles={transitionStyles}
				showForm={showForm}
				setShowForm={setShowForm}
				text={text}
				pomo={pomo}
				setText={setText}
				setPomo={setPomo}
				selected={selected}
				handleSubmit={handleSubmit}
				handleDelete={handleDelete}
			/>
		</div>
	);
};

export default Tasks;
