import {combineReducers} from 'redux';

import userReducer from './user';
import appReducer from './app';
import {reducer as network} from 'react-native-offline';

const rootReducers = combineReducers({
  user: userReducer,
  app: appReducer,
  network,
});

export default rootReducers;
