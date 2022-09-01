import { MailOutline, GitHub } from '@mui/icons-material';
const Footer = () => {
	const footer = {
		position: 'relative',
		width: '100%',
		bottom: '0',
		color: 'white',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-end',
		fontSize: '1rem',
		height: 'auto',
		flex: '1',
		margin: '15px 0px',
	};

	const linkContainer = {
		display: 'flex',
	};

	return (
		<footer style={footer}>
			<p>Designed and Created by Greg Burdick 2022</p>
			<div style={linkContainer}>
				<a
					aria-label='link to github page'
					target='_blank'
					rel='noopener noreferrer'
					href='https://github.com/gregburdick1024'>
					<GitHub style={{ color: 'white', padding: '2px' }} />
				</a>
				<a
					aria-label='link to email address'
					target='_blank'
					rel='noopener noreferrer'
					href={`mailto:gregrburdick@protonmail.com`}>
					<MailOutline style={{ color: 'white', padding: '2px' }} />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
