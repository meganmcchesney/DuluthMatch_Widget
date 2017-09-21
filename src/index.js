import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import AppContainer from './containers/AppContainer'
import './app.css'
import choices_fetchUserChoices from './actions/app'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var store = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunk)))

var url = "http://demo8867352.mockable.io/initialData"
store.dispatch(choices_fetchUserChoices(url))

render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
)