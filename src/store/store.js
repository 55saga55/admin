
// import { createStore  } from "redux";
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import mainReducer from '../Reducer';


const store = createStore(mainReducer,applyMiddleware(thunk)
  
    );

export default store;