import React from 'react'
import { Table } from 'react-bootstrap'
import './Table.css'
import data from '../../api/students'

const info = data.data

const TableInfo = () => (
  <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>GithubId</th>
        <th>TotalScore</th>
        <th>LocationName</th>
        <th>TaskResults</th>
        <th>IsActive</th>
      </tr>
    </thead>
    <tbody>
      {info.map(item => (
        <tr key={item.id}>
          <td>{item.rank}</td>
          <td>{item.name}</td>
          <td>{item.githubId}</td>
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
