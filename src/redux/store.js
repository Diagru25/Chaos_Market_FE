import { createStore, combineReducers, applyMiddleware } from "redux";
import {createBrowserHistory} from 'history';

import createSagaMiddleware from 'redux-saga';
import reducers from "./reducers";
import rootSaga from './sagas';

const history = createBrowserHistory();
history.listen(location => {

})

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        ...reducers
    }),
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

export {store, history}