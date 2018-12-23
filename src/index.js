import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebaseConfig from './config/firebaseConfig';

const thunkMiddleware = applyMiddleware(thunk.withExtraArgument({
    getFirebase,
    getFirestore
}));

const store = createStore(rootReducer, 
    compose(
        thunkMiddleware,
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig, {
            attachAuthIsReady: true,
            useFirestoreForProfile: true,
            userProfile: 'users'
        })
    )
);

store.firebaseAuthIsReady.then(() => {
    const app = (
        <Provider store={store}>
            <App />
        </Provider>
    );
    
    ReactDOM.render(app, document.getElementById('root'));
    
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
});