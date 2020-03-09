import { SORT } from '../actions/actionTypes'
import { DATA } from '../actions/actionTypes'

const initialState = {
  sortGitHubId: 'asc',
  data: [],
}

export default function sortGitHubId(state = initialState, action) {
  switch (action.type) {
    case DATA:
      return {
        data: action.data,
      }
    case SORT:
      return {
        sortGitHubId: action.sortGitHubId,
      }

    default:
      return state
  }
}
