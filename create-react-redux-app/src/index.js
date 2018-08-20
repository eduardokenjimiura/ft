// // import React from 'react';
// // import ReactDOM from 'react-dom';

// // import App from './App';
// // import { Values } from "redux-form-website-template";
// // import registerServiceWorker from './registerServiceWorker';
// // import { Provider } from 'react-redux';
// // import { Store } from './store';
// // import showResults from "./componetes/showResults";
// // import FieldArraysForm from "./componetes/FieldArraysForm";


// // const rootEl = document.getElementById("root");

// // ReactDOM.render(
// //   <Provider store={Store}>
// //     <div style={{ padding: 15 }}>
// //       <h2>Field Arrays</h2>
// //       <FieldArraysForm onSubmit={showResults} />
// //       <Values form="fieldArrays" />
// //     </div>
// //   </Provider>,
// //   rootEl
// // );
// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { Values } from "redux-form-website-template";
// import store from "./store";
  
// import showResults from "./componetes/showResults";
// import DropIdiomas from "./componetes/DropIdiomas";
// const rootEl = document.getElementById("root");

// ReactDOM.render(
//   <Provider store={store}>
//     <div style={{ padding: 15 }}>
 
//       <DropIdiomas   />
   
//     </div>
//   </Provider>,
//   rootEl
// );


// // ReactDOM.render(
// //   <Provider store={store}>
// //     <div style={{ padding: 15 }}>
 
// //       <FieldArraysForm onSubmit={showResults} />
// //       <Values form="reactWidgets" />
// //     </div>
// //   </Provider>,
// //   rootEl
// // );

// import React, { Component } from 'react';
// import {bindActionCreators} from 'redux'
// import {clickButton} from './actions';
// import './App.css';
// import {connect } from 'react-redux'
// class App extends Component {
//   state ={
//     inputValue : ''
//   }
//   inputChange = event => {
//     this.setState({
//       inputValue: event.target.value
//     })
//   }




//   render() {
//     const {
//       clickButton,
//       newValue
//     } = this.props;
//     const { inputValue } = this.state;
//     return (
//       <div className="App" style={{ paddingTop: '10px' }}>
//       <input type='text' onChange={this.inputChange} value={inputValue} />
//       <button onClick={()=> clickButton(inputValue)} >
//         button
//       </button>
//       <h1>{newValue}</h1>
//     </div>
//     );
//   }
// }
// const mapStateToProps = store => ({
//   newValue: store.clickState.newValue
// })

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ clickButton }, dispatch);
// export default connect(mapStateToProps,mapDispatchToProps)(App);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Store } from './store';


ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
