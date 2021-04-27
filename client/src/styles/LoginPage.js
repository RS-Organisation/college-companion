import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiFormLabel-root': {
            color: '#41aea9',
            fontFamily: 'Nunito Sans, sans-serif',
            fontWeight: '300'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#41aea9'
        },
    },
    main: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#41aea9',
        position: 'fixed',
        top: '0%',
        left: '0%',
        width: '100%',
        height: '100vh'
    },
    contentBox: {
        width: '70%',
        backgroundColor: 'white',
        height: '70%',
        borderRadius: '10px',
        display: 'flex',
    },
    imageGrid: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(65, 174, 169, 0.5)'
    },
    loginImage: {
        width: '90%',
    },
    loginGridDiv: {
        width: '70%',
        margin: 'auto',
        textAlign: 'center'
    },
    studentButton: {
        width: '40%',
        marginRight: '1rem',
        fontFamily: 'Nunito Sans, sans-serif',
        textTransform: 'none',
        fontWeight: '600',
        color: '#41aea9',
        border: '1px solid #41aea9',
        transition: '0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.02)'
        }
    },
    facultyButton: {
        width: '40%',
        marginLeft: '1rem',
        fontFamily: 'Nunito Sans, sans-serif',
        textTransform: 'none',
        fontWeight: '600',
        backgroundColor: '#41aea9',
        boxShadow: 'none',
        transition: '0.3s ease-in-out',
        '&:hover': {
            backgroundColor: '#41aea9',
            transform: 'scale(1.02)',
            boxShadow: 'none'
        }
    },
    loginButton: {
        width: '100%',
        fontFamily: 'Nunito Sans, sans-serif',
        fontSize: '1rem',
        textTransform: 'none',
        fontWeight: '600',
        backgroundColor: '#41aea9',
        boxShadow: 'none',
        transition: '0.3s ease-in-out',
        '&:hover': {
            backgroundColor: '#41aea9',
            transform: 'scale(1.02)',
            boxShadow: 'none'
        }
    },
    title: {
        fontFamily: 'Nunito Sans, sans-serif',
        fontSize: '2rem'
    },
    divider: {
        marginTop: '1.5rem',
        marginBottom: '2rem'
    },
    formField: {
        width: '100%',
        marginBottom: '2rem',
    }
}));