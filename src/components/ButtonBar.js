import { Button } from '@mui/material';

const ButtonBar = ({ changeTimer, timeLength }) => {
	const buttonBar = {
		display: 'flex',
		justifyContent: 'space-around',
		padding: '20px 0 0 0',
	};

	const selected = {
		color: 'white',
		borderTop: 'solid white 1px',
		borderRight: 'solid white 2px',
		borderLeft: 'solid white 2px',
		borderRadius: '5px 5px 0 0',
		padding: '0 20px',
	};

	return (
		<div style={buttonBar}>
			<Button
				style={
					timeLength === 1500
						? selected
						: {
								color: 'white',
								paddingLeft: '20px',
								paddingRight: '20px',
						  }
				}
				onClick={() => {
					changeTimer(1500);
				}}>
				PomoTime
			</Button>
			<Button
				style={
					timeLength === 300
						? selected
						: {
								color: 'white',
								paddingLeft: '20px',
								paddingRight: '20px',
						  }
				}
				onClick={() => {
					changeTimer(300);
				}}>
				Short Break
			</Button>
			<Button
				style={
					timeLength === 600
						? selected
						: {
								color: 'white',
								paddingLeft: '20px',
								paddingRight: '20px',
						  }
				}
				onClick={() => {
					changeTimer(600);
				}}>
				Long Break
			</Button>
		</div>
	);
};

export default ButtonBar;
