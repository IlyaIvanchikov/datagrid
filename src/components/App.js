import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { sortGitHubId, filterData, dataInfo } from '../store/actions/sortGitHubId'
import TableInfo from './Table/Table'
import TableSearch from './TableSearch/TableSearch'

import Loader from './Loader/Loader'

class App extends Component {
  componentDidMount() {
    this.props.dataInfo()
  }
  render() {
    this.props.filterData()
    return (
      <div className="container">
        {this.props.isLoading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <TableSearch />
            <TableInfo
              data={this.props.data}
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
    isLoading: state.sort.isLoading,
    sortField: state.sort.sortField,
    search: state.search.search,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dataInfo: () => dispatch(dataInfo()),
    sortGitHubId: sortField => dispatch(sortGitHubId(sortField)),
    filterData: () =>  dispatch(filterData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
