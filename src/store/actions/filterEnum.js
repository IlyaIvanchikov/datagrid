import { ENUM } from './actionTypes'

export function SetSelectedValues(selectedValues) {
  return {
    type: ENUM,
    selectedValues: selectedValues
  }
}

export function selectedValues(item) {
  return (dispatch, getState) => {
    const cloneData = item.concat()
    dispatch(SetSelectedValues(cloneData))
    }
}

// export function selectedValues(selectedValues) {
//   return {
//     type: ENUM,
//     selectedValues
//   }
// }