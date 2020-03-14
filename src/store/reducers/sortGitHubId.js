import {
  SORT,
  DATA,
  FIELD,
  FIELD_NULL,
  TYPE_SORT,
  CHANGE_SORT,
  CLEAR,
  SELECT_ROW,
  DELETE_ROW
} from '../actions/actionTypes'

const initialState = {
  sortGitHubId: 'asc',
  data: [],
  isLoading: true,
  sortField: null,
  typeField: [],
  typeSort: [],
  selectRow: null,
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
        typeField: state.typeField.concat(action.typeField),
      }
    case FIELD_NULL:
      const fieldNull = []
      return {
        ...state,
        typeField: fieldNull.slice(),
      }
    case CLEAR:
      const SortNull = []
      return {
        ...state,
        typeSort: SortNull.slice(),
      }
    case TYPE_SORT:
      return {
        ...state,
        typeSort: state.typeSort.concat(action.typeSort),
      }
    case CHANGE_SORT:
      const legSorlt = state.typeSort.length - 1
      const result = state.typeSort.slice(0, legSorlt)
      return {
        ...state,
        typeSort: result.concat([action.changeSort]),
      }
    case SELECT_ROW:
      return {
        ...state,
        selectRow: action.selectRow,
      }
      case DELETE_ROW:
        return {
          ...state,
          data: action.newArr
        }
    default:
      return state
  }
}
