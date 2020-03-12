import { ENUM } from '../actions/actionTypes'

const initialState = {
  enum: [
    {
      id: 1,
      name: 'minsk',
    },
    {
      id: 2,
      name: 'zhlobin',
    },
    {
      id: 3,
      name: 'gomel',
    },
  ],
  selectedValues: [
    {
      id: 1,
      name: 'minsk',
    },
    {
      id: 2,
      name: 'zhlobin',
    },
    {
      id: 3,
      name: 'gomel',
    },
  ],
}

export default function searchEnumReducer(state = initialState, action) {
  switch (action.type) {
    case ENUM:
      const test = action.selectedValues
      return {
        ...state,
        selectedValues: test,
      }
    default:
      return state
  }
}
