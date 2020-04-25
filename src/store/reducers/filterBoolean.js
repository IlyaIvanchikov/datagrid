import { BOOLEAN } from '../actions/actionTypes'

const initialState = {
  check: [
    {
      id: 1,
      checked: true,
      label: 'Все',
    },
    {
      id: 2,
      checked: false,
      label: 'Активные',
    },
    {
      id: 3,
      checked: false,
      label: 'Неактивные',
    },
  ],
}

export default function searchBooleanReducer(state = initialState, action) {
  switch (action.type) {
    case BOOLEAN:
      const test = state.check.map(item =>
        item.id === action.id
          ? { ...item, checked: item.checked = true }
          : { ...item, checked: item.checked = false }
      )
      return {
        check: test,
      }

    default:
      return state
  }
}
