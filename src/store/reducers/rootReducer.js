import { combineReducers } from 'redux'
import sortGitHubId from './sortGitHubId'
import searchReducer from './filterAll'

export default combineReducers({
  sort: sortGitHubId,
  search: searchReducer,
})
