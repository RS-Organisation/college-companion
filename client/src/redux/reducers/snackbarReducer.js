import { SET_SNACKBAR, REMOVE_SNACKBAR } from '../actionsType';

const initialState = {
  snackbarOpen: false,
  snackbarType: 'success',
  snackbarMessage: '',
};

const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SNACKBAR:
      return {
        ...state,
        snackbarOpen: true,
        snackbarType: action.payload.snackbarType,
        snackbarMessage: action.payload.snackbarMessage,
      };
    case REMOVE_SNACKBAR:
      return initialState;
    default:
      return state;
  }
};

export default snackbarReducer;
