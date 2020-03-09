import React, { Suspense, useEffect } from 'react'
import './App.css'
import _ from 'lodash'
import { connect } from 'react-redux'
import { sortGitHubId } from '../store/actions/sortGitHubId'
//import { dataInfo } from '../store/actions/sortGitHubId'
import TableInfo from './Table/Table'
import Loader from './Loader/Loader'
import data from '../api/students'

function App(props) {

  // useEffect(() => {
  //   props.dataInfo()
  // },[props.data]);

  return (
    <div className="container">
      <Suspense fallback={<Loader />}>
        <TableInfo
        data={data}
        sortGitHubId={props.sortGitHubId} />
      </Suspense>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    sort: state.sort.sortGitHubId,
    data: data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
   // dataInfo: () => dispatch(dataInfo()),
    sortGitHubId: (sortField, data) => dispatch(sortGitHubId(sortField, data)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
