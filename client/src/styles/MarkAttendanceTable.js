import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '95%',
    margin: '2rem auto',
    '& .MuiTableRow-root.Mui-selected': {
      backgroundColor: 'rgba(65, 174, 169, 0.1)'
    },
    '& .MuiCheckbox-colorSecondary.Mui-checked': {
      color: '#41aea9'
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#41aea9',
    },
  },
  tableContainer: {
    maxHeight: '70vh'
  },
  tableCell: {
    backgroundColor: '#41aea9',
    color: 'white',
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: '600',
    fontSize: '1rem',
  },
  marksInputTextField: {
    width: '50%'
  },
  inputTableCell: {
    padding: '6px 0 9px 0'
  },
  noDataDiv: {
    backgroundColor: '#41aea9',
    color: '#ffff',
    textAlign: 'center',
    padding: '3rem',
  },
  noDataIcon: {
    fontSize: '5rem',
  },
  noDataHeading: {
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: '600',
    fontSize: '3.5rem',
    marginTop: '2rem',
    marginBottom: '0',
  },
  noDataText: {
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: '300',
    fontSize: '1.2rem',
    marginTop: '0.5rem',
  },
}));