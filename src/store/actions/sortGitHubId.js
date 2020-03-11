import { SORT, DATA, FILTER } from './actionTypes'
import faker from 'faker'
import _ from 'lodash'

export function SetSortType(sortGitHubId, data, sortField) {
  return {
    type: SORT,
    sortGitHubId,
    data,
    sortField,
  }
}

export function SetData(data) {
  return {
    type: DATA,
    data,
  }
}

// export function SetFilter(data) {
//   return {
//     type: FILTER,
//     data,
//   }
// }

export function dataInfo() {
  return dispatch => {
    faker.seed(74)
    const makeFake = idx => {
      return {
        id: 11523 + idx,
        rank: idx,
        name: faker.name.findName(),
        githubId: faker.internet.email(),
        totalScore: 0,
        locationName: faker.address.city(),
        taskResults: [Math.floor(Math.random() * 10)],
        isActive: faker.random.boolean(),
      }
    }
    const dataInfo = [...new Array(1000)].map((_, idx) => makeFake(idx))
    dispatch(SetData(dataInfo))
  }
}

export function sortGitHubId(sortField) {
  return (dispatch, getState) => {
    const state = getState().sort
    const cloneData = state.data.concat()
    const sortGitHubId = state.sortGitHubId
    const sortType = sortGitHubId === 'asc' ? 'desc' : 'asc'
    const orderedData = _.orderBy(cloneData, sortField, sortType)
    dispatch(SetSortType(sortType, orderedData, sortField))
  }
}
export function filterData() {
  return (dispatch, getState) => {
    const stateSort = getState().sort
    const stateSearch = getState().search
    const stateCheck = getState().check
    let newDataBoolean = stateCheck.check.find(item => {
      return item.checked === true
    })
    // if (!stateSearch.search && (!newDataBoolean || newDataBoolean.id === 1)) {
    //   return stateSort.data
    // }
    let newData = stateSort.data.filter(item => {
      if (newDataBoolean.id === 2) {
        return (
          item['isActive'] === true &&
          item['name'].toLowerCase().includes(stateSearch.search.toLowerCase())
        )
      } else if (newDataBoolean.id === 3) {
        return (
          item['isActive'] === false &&
          item['name'].toLowerCase().includes(stateSearch.search.toLowerCase())
        )
      }
      else if (newDataBoolean.id === 1) {
        return (
          item['name'].toLowerCase().includes(stateSearch.search.toLowerCase())
        )
      }
      // return item['name']
      //   .toLowerCase()
      //   .includes(stateSearch.search.toLowerCase())
    })

    if (!newData.length) {
      newData = stateSort.data
    }
    return newData
  }
}
