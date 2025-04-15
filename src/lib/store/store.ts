import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as userReducer } from './user';

const reducer = combineReducers({
	user: userReducer
});

export const makeStore = () => {
	return configureStore({
		reducer
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
