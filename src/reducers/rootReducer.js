import { combineReducers } from 'redux'
import simpleReducer from './simpleReducer'
import { itemsHaveError, itemsAreLoading, items } from './itemsReducer'

export default combineReducers({
  items,
  itemsHaveError,
  itemsAreLoading
})