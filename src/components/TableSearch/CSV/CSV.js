import React from 'react'
import './CSV.css'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { CSVLink } from 'react-csv'

const headers = [
{ label: "id", key: "id" },
{ label: "Name", key: "name" },
{ label: "GithubId", key: "githubId" },
{ label: "TotalScore", key: "totalScore" },
{ label: "LocationName", key: "locationName" },
{ label: "TaskResults", key: "taskResults" },
{ label: "isActive", key: "isActive" },
];
const CSV = props => (
<Button className="mb-3" variant="outline-light">
<CSVLink data={props.data} filename={"data.csv"}separator={";"} headers={headers}>Скачать CSV</CSVLink>
</Button>
)

function mapStateToProps(state) {
return {
data: state.sort.data,
}
}

function mapDispatchToProps(dispatch) {
return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CSV)