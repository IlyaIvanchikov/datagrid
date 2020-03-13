import { SORT, DATA, FIELD, FIELD_NULL, TYPE_SORT } from '../actions/actionTypes'

const initialState = {
  sortGitHubId: 'asc',
  data: [],
  isLoading: true,
  sortField: null,
  typeField: [],
  typeSort: [],
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
    case FIELD_NULL:
      const fieldNull = []
        return {
          ...state,
          typeField: fieldNull.slice()
      }
      case TYPE_SORT:
          return {
            ...state,
            typeSort: state.typeSort.concat(action.typeSort)
          }
    default:
      return state
  }
}
