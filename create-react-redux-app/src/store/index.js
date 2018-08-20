// import { createStore,combineReducers } from 'redux';
// import { Reducers } from '../reducers';
// import { reducer as reduxFormReducer } from 'redux-form';
// export const Store = createStore(Reducers);


// const reducer = combineReducers({
//   form: reduxFormReducer, // mounted under "form"
// });
// const store = (window.devToolsExtension
//   ? window.devToolsExtension()(createStore)
//   : createStore)(reducer);

// export default store;
// import { createStore, combineReducers } from 'redux';
// import { reducer as reduxFormReducer } from 'redux-form';

// const reducer = combineReducers({
//   form: reduxFormReducer, // mounted under "form"
// });
// const store = (window.devToolsExtension
//   ? window.devToolsExtension()(createStore)
//   : createStore)(reducer);

// export default store;

import { createStore } from 'redux';
import { Reducers } from '../reducers';
export const Store = createStore(Reducers);