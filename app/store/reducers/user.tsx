import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    token: null, // user token
    user: {}, // user information
  },
  reducers: {
    login: (state, {payload}) => {
      // const {token, user} = payload;
      // state.token = token;
      // state.user = user;
    },
    loginSuccess(state) {
      // state.isAuth = true;
    },

    logout(state) {
      // state.isAuth = false;
      // state.error = '';
      // state.user = {};
      // state.token = null;
    },
  },
});

export const {
  login,
  loginSuccess,

  logout,
} = userSlice.actions;

export default userSlice.reducer;
