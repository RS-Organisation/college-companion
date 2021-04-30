import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    width: '70%',
    margin: 'auto',
    textAlign: 'center'
  },
  title: {
    fontSize: '2rem',
    fontWeight: '600',
    marginTop: '0rem',
    marginBottom: '1rem',
    fontFamily: 'Nunito Sans',
    color: '#41aea9'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2rem',
    borderBottom: '1px solid #d4d5d9',
  },
  span: {
    color: '#6e737b',
    padding: '0.7rem 1.5rem',
    fontSize: '1.2rem',
    '&:hover': {
      cursor: 'pointer',
      color: '#21262d',
    },
  },
  clickedButton: {
    color: '#21262d',
    borderBottom: '3px solid #41aea9',
    fontWeight: '500',
  },
}));
