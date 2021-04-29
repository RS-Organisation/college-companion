import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: '1.8rem',
    fontWeight: '500',
    marginTop: '0rem',
    marginBottom: '1rem',
    paddingLeft: '2.5rem',
    fontFamily: 'Nunito Sans',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '0.5rem',
    marginBottom: '1rem',
    paddingLeft: '1.2rem',
    borderBottom: '1px solid #d4d5d9',
  },
  span: {
    color: '#6e737b',
    marginRight: '0.8rem',
    padding: '1rem 1.3rem',
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
