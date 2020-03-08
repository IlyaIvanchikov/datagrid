import { SORT } from './actionTypes'

export function SetSortType(sortGitHubId) {
  return {
    type: SORT,
    sortGitHubId
  }
}
export function sortGitHubId(sortField) {
  return (dispatch, getState) => {
    const state = getState().sort
    const sortGitHubId = state.sortGitHubId
    const sortType = sortGitHubId === 'asc' ? 'desc' : 'asc'
    dispatch(SetSortType(sortType))
    console.log(sortField)
  }
}
