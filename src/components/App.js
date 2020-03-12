import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import {
  sortGitHubId,
  filterData,
  dataInfo,
} from '../store/actions/sortGitHubId'
import TableInfo from './Table/Table'
import TableSearch from './TableSearch/TableSearch'

import Loader from './Loader/Loader'

class App extends Component {
  componentDidMount() {
    this.props.dataInfo()
  }

  render() {
    const displayData = this.props.filterData()
    return (
      <div className="container">
        {this.props.isLoading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <TableSearch />
            <TableInfo
              data={displayData}
              sort={this.props.sort}
              sortField={this.props.sortField}
              sortGitHubId={this.props.sortGitHubId}
            />
          </React.Fragment>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    sort: state.sort.sortGitHubId,
    data: state.sort.data,
    sortField: state.sort.sortField,
    displayData: state.sort.displayData,
    isLoading: state.sort.isLoading,
    typeField: state.sort.typeField,
    search: state.search.search,
    check: state.check.check,
    selectedValues: state.enum.selectedValues,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dataInfo: () => dispatch(dataInfo()),
    sortGitHubId: (e, sortField) => dispatch(sortGitHubId(e, sortField)),
    filterData: () => dispatch(filterData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
