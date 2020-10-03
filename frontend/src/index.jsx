import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'


import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './main/app'
import reducers from './main/reducers'

//Instalar o plugin Redux DevTools no Chrome para utilizar os recursos
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
        && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk, multi)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app')
)