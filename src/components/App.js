import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import {
  sortGitHubId,
  filterData,
  dataInfo,
} from '../store/actions/sortGitHubId'
import { selectedValues } from '../store/actions/filterEnum'
import TableInfo from './Table/Table'
import TableSearch from './TableSearch/TableSearch'

import Loader from './Loader/Loader'

class App extends Component {
  componentDidMount() {
    this.props.dataInfo()
  }

  render() {
    const displayData = this.props.filterData();
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
    displayData: state.sort.displayData,
    isLoading: state.sort.isLoading,
    sortField: state.sort.sortField,
    search: state.search.search,
    check: state.check.check,
    selectedValues: state.enum.selectedValues
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dataInfo: () => dispatch(dataInfo()),
    sortGitHubId: sortField => dispatch(sortGitHubId(sortField)),
    filterData: () => dispatch(filterData()),
    //selectedValues: (item) => dispatch(selectedValues(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
