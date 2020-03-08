import React, { Suspense } from 'react'
import './App.css'
import _ from 'lodash'
import { connect } from 'react-redux'
import { sortGitHubId } from '../store/actions/sortGitHubId'
import TableInfo from './Table/Table'
import Loader from './Loader/Loader'



function App(props) {

  console.log(props.sort)
  return (
    <div className="container">
      <Suspense fallback={<Loader />}>
        {/* <TableInfo  /> */}
        <TableInfo sortGitHubId={props.sortGitHubId}/>
      </Suspense>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    sort: state.sort.sortGitHubId,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sortGitHubId: sortField => dispatch(sortGitHubId(sortField)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
