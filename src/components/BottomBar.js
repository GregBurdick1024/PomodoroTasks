const BottomBar = ({ tasks, timeLength, theme }) => {
	const bottomBar = {
		maxWidth: '550px',
		width: 'auto',
		height: 60,
		marginTop: '15px',
		borderRadius: '0 0 5px 5px',
		borderTop: '3px solid white',
		color: 'white',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		fontSize: '1.2rem',
		transition: 'all 0.3s ease',
	};
	const barText = {
		color: 'white',
	};

	const barData = {
		color: 'white',
		paddingLeft: '10px',
		fontSize: '1.7rem',
	};

	const totalPomos = tasks.reduce((total, curr) => {
		if (!curr.complete) total += curr.pomo;
		return total;
	}, 0);

	const totalComplete = tasks.reduce((total, curr) => {
		total += curr.done;
		return total;
	}, 0);

	const totalMiliSeconds = totalPomos * 25 * 60 * 1000;

	const now = Date.now();

	const finishTime = new Date(now + totalMiliSeconds);
	return (
		<div style={{ ...bottomBar, ...theme[timeLength].hiLight }}>
			<div style={barText}>
				Est:
				<span style={barData}>{totalPomos}</span>
			</div>
			<div style={barText}>
				Act:
				<span style={barData}>{totalComplete}</span>
			</div>
			<div style={barText}>
				Finish:
				<span style={barData}>
					{finishTime.getHours()}:
					{finishTime.getMinutes() < 10
						? `0${finishTime.getMinutes()}`
						: finishTime.getMinutes()}
				</span>
			</div>
		</div>
	);
};

export default BottomBar;
