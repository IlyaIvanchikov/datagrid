import React from 'react'
import { Table } from 'react-bootstrap'
import './Table.css'

const TableInfo = props => (
  <Table className="table" striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th onClick={() => props.sortGitHubId('githubId')}>GithubId {props.sortField === 'githubId' ? <small>{props.sort}</small> : null}</th>
        <th>TotalScore</th>
        <th>LocationName</th>
        <th>TaskResults</th>
        <th>IsActive</th>
      </tr>
    </thead>
    <tbody>
      {props.data.map(item => (
        <tr key={item.id}>
          <td>{item.rank}</td>
          <td className="table-string">{item.name}</td>
          <td>
            <a className="table-a" href={item.githubId}>
              {item.githubId}
            </a>
          </td>
          <td>{item.totalScore}</td>
          <td>{item.locationName}</td>
          <td>{item.taskResults}</td>
          <td>{String(item.isActive)}</td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default TableInfo
