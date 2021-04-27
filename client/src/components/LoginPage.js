import { React } from 'react';
import loginImage from '../images/loginImage.svg';
import {
	Grid,
	Button,
	Divider,
	TextField,
	InputAdornment,
	IconButton
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useStyles from '../styles/LoginPage';

const LoginPage = () => {
	const classes = useStyles();
	return (
		<div className={classes.main}>
			<div className={classes.contentBox}>
				<Grid container spacing={0}>
					<Grid item xs={12} lg={6} className={classes.imageGrid}>
						<img src={loginImage} alt='login' className={classes.loginImage} />
					</Grid>
					<Grid item xs={12} lg={6} className={classes.loginGrid}>
						<div className={classes.loginGridDiv}>
							<h3 className={classes.title}>Welcome</h3>
							<div classesName={classes.buttonDiv}>
								<Button
									variant='outlined'
									className={classes.studentButton}
								>
									Student Login
            		</Button>
								<Button
									variant='contained'
									color='primary'
									className={classes.facultyButton}
								>
									Faculty Login
            		</Button>
							</div>
							<Divider variant="middle" className={classes.divider} />
							<form className={classes.root} autoComplete="off">
								<TextField
									className={classes.formField}
									id="outlined-basic"
									label="Registration Number"
									variant="outlined"
									size="small"
								/>
								<TextField
									className={classes.formField}
									id="outlined-basic"
									label="Password"
									variant="outlined"
									size="small"
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													edge="end"
												>
													<Visibility />
												</IconButton>
											</InputAdornment>
										)
									}}
								/>
								<Button
									variant='contained'
									color='primary'
									className={classes.loginButton}
								>
									Login
            		</Button>
							</form>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default LoginPage;
