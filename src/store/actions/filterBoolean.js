import { BOOLEAN } from './actionTypes'

// export function SetToggleSearch(id, check) {
//   return {
//     type: BOOLEAN,
//     check.map(item => {
//       if(item.id === id) {
//         item.checked = "true";
//       }
//       else {
//         item.checked = "false";
//       }
//     })
//   }
// }

export function toggleSearch(id) {
  return {
    // const state = getState().check
    // dispatch(SetToggleSearch(id, state))
    type: BOOLEAN,
    id
  }
}



