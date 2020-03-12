import { SEARCH } from './actionTypes'

export function changeHandler(search) {
  return {
    type: SEARCH,
    search,
  }
}
