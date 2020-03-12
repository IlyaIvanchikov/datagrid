import { SORT, DATA, FIELD } from '../actions/actionTypes'

const initialState = {
  sortGitHubId: 'asc',
  data: [],
  isLoading: true,
  sortField: null,
  typeField: []
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
      case FIELD:
        return {
          ...state,
          typeField: state.typeField.concat(action.typeField)
        }
    default:
      return state
  }
}
