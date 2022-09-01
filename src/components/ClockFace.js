import { Button } from '@mui/material';

const ClockFace = ({ theme, timeLength, timeLeft, timer, start, tasks }) => {
	const onePercent = timeLength / 100;
	const widthPercent = timeLeft / onePercent;

	const display = {
		height: '250px',
		width: 'auto',
		maxWidth: '550px',
		backgroundColor: 'white',
		padding: '2rem 1rem',
		borderRadius: '5px',
		fontSize: '1rem',
		justifyContent: 'center',
	};
	const timeLine = {
		height: '3px',
		width: `${100 - widthPercent}%`,
		transition: 'all 0.5s',
		transform: 'translateY(-2px)',
		boxShadow: `${100 - widthPercent ? '1px 1px 1px -1px #FFFFF' : ''}`,
		borderRadius: '100px',
	};

	const timeGoal = {
		width: '100%',
		borderBottom: 'solid 1px grey',
		height: '1px',
	};

	const time = {
		fontSize: '7rem',
		padding: '1rem 0',
	};

	const startStyle = {
		border: 0,
		borderRadius: 3,
		color: 'white',
		height: 48,
		padding: '0 30px',
		width: '80%',
		boxShadow: '0px 15px 2px 0px #CECECE',
		transition: `transform 400ms ease, box-shadow 400ms ease`,
	};

	const stopStyle = {
		border: 0,
		borderRadius: 3,
		color: 'white',
		height: 48,
		transform: 'translateY(10px)',
		boxShadow: '0px 5px 5px 0px #CECECE',
		padding: '0 30px',
		width: '80%',
		transition: `transform 400ms ease, box-shadow 400ms ease`,
	};
	const displayName = timeLength < 1500 ? 'Break' : 'PomoTime';
	const displayTimeLeft = () => {
		const minutes = Math.floor(timeLeft / 60);
		const seconds =
			timeLeft % 60 < 10 ? '0' + (timeLeft % 60) : timeLeft % 60;

		return `${minutes}:${seconds}`;
	};
	document.title = `${displayTimeLeft()} - ${
		tasks.length > 0 ? tasks[0].text : displayName
	}`;

	return (
		<div style={{ ...display }}>
			<div style={timeGoal}></div>
			<div style={{ ...timeLine, ...theme[timeLength].gradient }}></div>
			<div style={{ ...time, ...theme[timeLength].display }}>
				{displayTimeLeft()}
			</div>
			<Button
				style={
					!start
						? { ...startStyle, ...theme[timeLength].gradient }
						: { ...stopStyle, ...theme[timeLength].gradient }
				}
				onClick={timer}>
				{start ? 'Stop' : 'Start'}
			</Button>
		</div>
	);
};

export default ClockFace;
