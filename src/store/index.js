import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

// const countReducer = (state = initialState, action) => {
// 	if (action.type === "increment") {
// 		return {
// 			...state,
// 			counter: state.counter + 1,
// 			showCounter: state.showCounter,
// 		};
// 	}

// 	if (action.type === "increase") {
// 		return {
// 			...state,
// 			counter: state.counter + action.amount,
// 			showCounter: state.showCounter,
// 		};
// 	}

// 	if (action.type === "decrement") {
// 		return {
// 			...state,
// 			counter: state.counter - 1,
// 			showCounter: state.showCounter,
// 		};
// 	}

// 	if (action.type === "toggle") {
// 		return {
// 			...state,
// 			counter: state.counter,
// 			showCounter: !state.showCounter,
// 		};
// 	}

// 	return state;
// };

// const store = redux.createStore(countReducer);

// const store = redux.createStore(counterSlice.reducer);

const store = configureStore({
	// reducer: {count: counterSlice.reducer}
	reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
