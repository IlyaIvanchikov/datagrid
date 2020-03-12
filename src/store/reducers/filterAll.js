import { SEARCH } from '../actions/actionTypes'

const initialState = {
  search: '',
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        search: action.search,
      }

    default:
      return state
  }
}
