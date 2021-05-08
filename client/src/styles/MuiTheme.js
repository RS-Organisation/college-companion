import { createMuiTheme } from "@material-ui/core";

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#41aea9',
      },
    },
    MuiPickersYear: {
      yearSelected: {
        color: '#41aea9'
      }
    },
    MuiPickersDay: {
      daySelected: {
        backgroundColor: '#41aea9',
        '&:hover': {
          backgroundColor: '#41aea9'
        }
      },
      dayDisabled: {
        color: '#41aea9',
      },
      current: {
        color: '#41aea9',
      },
    },
    MuiButton: {
      textPrimary: {
        color: '#41aea9',
        fontWeight: '400'
      }
    },
    MuiPickersModal: {
      dialogAction: {
        color: '#41aea9',
      },
    },
  },
});

export default materialTheme;