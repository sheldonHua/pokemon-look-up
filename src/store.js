import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const initialState = {}

const configureStore = () => createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk)
  )
)

export default configureStore