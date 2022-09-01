import { useState, useRef } from 'react';
import ButtonBar from './components/ButtonBar';
import ClockFace from './components/ClockFace';
import TopBar from './components/TopBar';
// import Tasks from './components/Tasks';
// import BottomBar from './components/BottomBar';
import Footer from './components/Footer';
import { Container } from '@mui/material';
import { theme } from './theme';

function App() {
	const [timeLength, setTimeLength] = useState(1500);
	const [timeLeft, setTimeLeft] = useState(1500);
	const [start, setStart] = useState(false);
	const [tasks, setTasks] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [pomo, setPomo] = useState(1);
	const [text, setText] = useState('');
	const [selected, setSelected] = useState(null);
	const intervalRef = useRef();

	const appStyle = {
		textAlign: 'center',
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		fontSize: 'calc(10px + 2vmin)',
		color: 'white',
		fontFamily: 'Holtwood One SC',
		transition: 'all 0.3s ease',
	};

	const playSound = (id) => {
		const sound = document.getElementById(id);
		sound.currentTime = 0;
		const playPromise = sound.play();
		if (playPromise !== undefined) {
			playPromise
				.then((s) => {
					//console.log(`${id} played`)
				})
				.catch((error) => {
					console.log(`${id} failed`);
				});
		}
	};
	//Alarm sounds at end of countdown
	if (timeLeft < 1) {
		playSound('alarm');
	}

	//switches between the length of times for the timer
	const changeTimer = (time) => {
		clearInterval(intervalRef.current);
		setTimeLeft(time);
		setTimeLength(time);
		setStart(false);
	};

	//uses set interval to call itself every second when timer is running
	const timer = () => {
		if (!start) {
			playSound('click');
			setStart(!start);
			const now = Date.now();
			const then = timeLeft * 1000 + now;
			const countdown = setInterval(() => {
				let secondsLeft = Math.round((then - Date.now()) / 1000);
				// check if timer should stop
				if (secondsLeft <= 0) {
					clearInterval(countdown);
					timeLength === 1500 ? changeTimer(300) : changeTimer(1500);
					return;
				}
				setTimeLeft(secondsLeft);
			}, 1000);
			intervalRef.current = countdown;
		} else {
			setStart(!start);
			clearInterval(intervalRef.current);
		}
	};

	//handles the form submit of a task
	const handleSubmit = (e) => {
		e.preventDefault();
		setShowForm(false);
		if (selected) {
			setTasks(
				tasks.map((task) =>
					selected.id === task.id
						? { ...task, text, pomo: parseInt(pomo) }
						: task
				)
			);
		} else {
			setTasks(
				tasks.concat({
					text,
					pomo: parseInt(pomo),
					complete: false,
					done: 0,
					id: Date.now(),
				})
			);
		}
		setPomo(1);
		setText('');
		setSelected(null);
	};

	//handles the editing of a task
	const handleEdit = (task) => {
		setSelected(task);
		setText(task.text);
		setPomo(task.pomo);
		setShowForm(true);
	};

	//when a task is complete sets its status as complete
	const handleDone = (index) => {
		setTasks(
			tasks.map((task, i) =>
				index === i ? { ...task, complete: !task.complete } : task
			)
		);
	};

	//handles the deletion of a task
	const handleDelete = () => {
		if (tasks.length > 1) {
			const index = tasks.reduce((total, curr, index) => {
				if (curr.id === selected.id) {
					total = index;
				}
				return total;
			}, null);
			const taskHalfA = tasks.slice(0, index);
			const taskHalfB = tasks.slice(index + 1);
			setTasks(taskHalfA.concat(taskHalfB));
		} else {
			setTasks([]);
		}
		setShowForm(false);
		setPomo(1);
		setText('');
		setSelected(null);
	};

	return (
		<div style={theme[timeLength].main}>
			<header>
				<audio
					id='alarm'
					src='https://www.soundjay.com/phone/sounds/telephone-ring-01a.mp3'
				/>
				<audio
					id='click'
					src='https://www.soundjay.com/buttons/sounds/button-24.mp3'
				/>
			</header>
			<Container style={appStyle} maxWidth='sm' className='wrapper'>
				<ButtonBar changeTimer={changeTimer} timeLength={timeLength} />
				<ClockFace
					theme={theme}
					timeLength={timeLength}
					timeLeft={timeLeft}
					setTimeLeft={setTimeLeft}
					timer={timer}
					start={start}
					tasks={tasks}
				/>
				<TopBar theme={theme} timeLength={timeLength} tasks={tasks} />
				{/* <Tasks
					setTasks={setTasks}
					tasks={tasks}
					selected={selected}
					setShowForm={setShowForm}
					showForm={showForm}
					text={text}
					setText={setText}
					pomo={pomo}
					setPomo={setPomo}
					handleSubmit={handleSubmit}
					handleEdit={handleEdit}
					handleDelete={handleDelete}
					handleDone={handleDone}
				/>
				<BottomBar
					theme={theme}
					timeLength={timeLength}
					tasks={tasks}
				/> */}
				<Footer />
			</Container>
		</div>
	);
}

export default App;
