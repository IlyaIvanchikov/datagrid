import { COLUMNS } from '../actions/actionTypes'

const initialState = {
  columns: [
    {
      id: 1,
      checked: false,
      label: 'name',
    },
    {
      id: 2,
      checked: true,
      label: 'githubId',
    },
    {
      id: 3,
      checked: true,
      label: 'locationName',
    },
  ],
}

export default function filterColumnsReducer(state = initialState, action) {
  switch (action.type) {
    case COLUMNS:
      const col = state.columns.map(item =>
        item.id === action.id
          ? { ...item, checked: item.checked = false }
          : { ...item }
      )
      return {
        columns: col,
      }

    default:
      return state
  }
}
