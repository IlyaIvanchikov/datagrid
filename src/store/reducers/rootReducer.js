import { combineReducers } from 'redux'
import sortGitHubId from './sortGitHubId'
import searchReducer from './filterAll'
import searchBooleanReducer from './filterBoolean'
import searchEnumReducer from './filterEnum'
import filterColumnsReducer from './filterColumns'

export default combineReducers({
  sort: sortGitHubId,
  search: searchReducer,
  check: searchBooleanReducer,
  enum: searchEnumReducer,
  columns: filterColumnsReducer
})
