import { SORT, DATA } from '../actions/actionTypes'

const initialState = {
  sortGitHubId: 'asc',
  data: [],
  isLoading: true,
  sortField: null,
}

export default function sortGitHubId(state = initialState, action) {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      }
    case SORT:
      return {
        ...state,
        sortGitHubId: action.sortGitHubId,
        data: action.data,
        sortField: action.sortField,
      }
    default:
      return state
  }
}
