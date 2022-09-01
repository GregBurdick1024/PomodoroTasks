const TopBar = ({ tasks, timeLength, theme }) => {
	const topBar = {
		maxWidth: '550px',
		width: 'auto',
		height: 70,
		margin: '15px 0',
		borderRadius: '5px 5px 0 0',
		color: 'white',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '1.5rem',
		transition: 'all 0.3s ease',
	};
	const barData = {
		marginBlockStart: '5px',
		marginBlockEnd: '5px',
		fontSize: '1.7rem',
	};
	const barText = {
		marginBlockStart: '5px',
		marginBlockEnd: '5px',
		fontSize: '1rem',
	};
	const taskIndex = tasks.reduce((total, curr, index) => {
		if (!curr.complete && (total > index || total === null)) {
			total = index;
		}
		return total;
	}, null);
	return (
		<div style={{ ...topBar, ...theme[timeLength].hiLight }}>
			{taskIndex !== null ? (
				<div>
					<span style={barText}>Working on:</span>
					<p style={barData}>{tasks[taskIndex].text}</p>
				</div>
			) : (
				`Time to work!`
			)}
		</div>
	);
};

export default TopBar;
