// @flow

// @Reducer
//
// Add Item: action payload = action.payload
// Del Item: action payload = action.id
// 使用純粹函式的陣列unshift，不能有副作用
// state(狀態)一開始的值是空陣列`state=[]`
import { combineReducers } from "redux";
import { items, lists } from "./reducerTodo";

const itemApp = combineReducers({
	items,
	lists,
});

export default itemApp;
