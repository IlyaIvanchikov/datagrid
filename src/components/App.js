import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { sortGitHubId } from '../store/actions/sortGitHubId'
import { dataInfo } from '../store/actions/sortGitHubId'
import TableInfo from './Table/Table'
import TableSearch from './TableSearch/TableSearch'
import Loader from './Loader/Loader'

class App extends Component {
  componentDidMount() {
    this.props.dataInfo()
  }

  render() {
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
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dataInfo: () => dispatch(dataInfo()),
    sortGitHubId: sortField => dispatch(sortGitHubId(sortField)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
