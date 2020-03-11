import { combineReducers } from 'redux'
import sortGitHubId from './sortGitHubId'
import searchReducer from './filterAll'
import searchBooleanReducer from './filterBoolean'

export default combineReducers({
  sort: sortGitHubId,
  search: searchReducer,
  check: searchBooleanReducer
})
