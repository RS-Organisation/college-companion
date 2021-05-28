import { SET_SNACKBAR, REMOVE_SNACKBAR } from '../actionsType';

export const setSnackbar = (formData) => (dispatch) => {
  dispatch({
    type: SET_SNACKBAR,
    payload: {
      ...formData,
    },
  });
};

export const removeSnackbar = () => (dispatch) => {
  dispatch({
    type: REMOVE_SNACKBAR,
  });
};
