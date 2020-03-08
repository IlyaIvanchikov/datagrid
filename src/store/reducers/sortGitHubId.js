import { SORT } from '../actions/actionTypes'

const initialState = {
  sortGitHubId: 'asc',
}

export default function sortGitHubId(state = initialState, action) {
  switch (action.type) {
    case SORT:
      return {
        sortGitHubId: action.sortGitHubId
      }
    default:
      return state
  }
}
