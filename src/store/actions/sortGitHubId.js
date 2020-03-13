import { SORT, DATA, FIELD, FIELD_NULL, TYPE_SORT, CHANGE_SORT } from './actionTypes'
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

export function SetField(typeField) {
  return {
    type: FIELD,
    typeField,
  }
}

export function SetTypeSort(typeSort) {
  return {
    type: TYPE_SORT,
    typeSort,
  }
}
export function SetFieldNull() {
  return {
    type: FIELD_NULL,
  }
}

export function SetChangeSort(changeSort) {
  return {
    type: CHANGE_SORT,
    changeSort
  }
}

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
        locationName: faker.random.arrayElement(['minsk', 'zhlobin', 'gomel']),
        taskResults: [Math.floor(Math.random() * 10)],
        isActive: faker.random.boolean(),
      }
    }
    const dataInfo = [...new Array(1000)].map((_, idx) => makeFake(idx))
    dispatch(SetData(dataInfo))
  }
}

export function sortGitHubId(e, sortField) {

  return (dispatch, getState) => {
    if (!e.shiftKey) {
      const state = getState().sort
      const cloneData = state.data.concat()
      const sortGitHubId = state.sortGitHubId
      const sortType = sortGitHubId === 'asc' ? 'desc' : 'asc'
      const orderedData = _.orderBy(cloneData, sortField, sortType)
      dispatch(SetSortType(sortType, orderedData, sortField))
      dispatch(SetFieldNull())
    }
    else if (e.shiftKey) {
       const state = getState().sort
       const cloneData = state.data.concat()
      // const sortGitHubId = state.sortGitHubId
       const sortType = sortGitHubId === 'asc' ? 'desc' : 'asc'
      let newTypeField = state.typeField.find(item => {
        return item === sortField
      })
      if (!newTypeField) {
        dispatch(SetField(sortField))
        dispatch(SetTypeSort(sortType))
        const stateAllNew = getState().sort
        const sortGitHubIdAllNew = stateAllNew.sortGitHubId
        const typeFieldNew = stateAllNew.typeField
        const sortArrNew = stateAllNew.typeSort
        const sortTypeNew = sortGitHubIdAllNew === 'asc' ? 'desc' : 'asc'
        const orderedData = _.orderBy(cloneData, typeFieldNew, sortArrNew)
        dispatch(SetSortType(sortTypeNew, orderedData, typeFieldNew))
      }
      const stateAll = getState().sort
      const sortGitHubIdAll = stateAll.sortGitHubId
      const typeField = stateAll.typeField
      const sortArr = stateAll.typeSort
      const sortTypeNew = sortGitHubIdAll === 'asc' ? 'desc' : 'asc'
      const orderedData = _.orderBy(cloneData, typeField, sortArr)
      dispatch(SetSortType(sortTypeNew, orderedData, typeField))
    }
  }
}
export function filterData() {
  return (dispatch, getState) => {
    const stateSort = getState().sort
    const stateSearch = getState().search
    const stateCheck = getState().check
    const stateEnum = getState().enum
    let newDataBoolean = stateCheck.check.find(item => {
      return item.checked === true
    })

    let enumLength = stateEnum.selectedValues.length
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
      } else if (newDataBoolean.id === 1) {
        return item['name']
          .toLowerCase()
          .includes(stateSearch.search.toLowerCase())
      }
      return item
    })
    let newDataEnum = newData.filter(item => {
      if (enumLength === 1) {
        return item['locationName'] === stateEnum.selectedValues[0].name
      } else if (enumLength === 2) {
        return (
          item['locationName'] === stateEnum.selectedValues[0].name ||
          item['locationName'] === stateEnum.selectedValues[1].name
        )
      } else if (enumLength === 3) {
        return (
          item['locationName'] === stateEnum.selectedValues[0].name ||
          item['locationName'] === stateEnum.selectedValues[1].name ||
          item['locationName'] === stateEnum.selectedValues[2].name
        )
      }
      return item
    })
    if (!newDataEnum.length) {
      newDataEnum = stateSort.data
    }
    return newDataEnum
  }
}
