import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import './Table.css'
class TableInfo extends Component {
  render() {
    //this.props.DeleteRow(e)
    const tableList = this.props.data.map((item, index) => (
      <tr
        key={item.id}
        onClick={e => this.props.selectRow(e, index)}
        style={{ backgroundColor:'grey' }}
      >
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
    ))

    tableList.map((tr, index) => {
      if (index === this.props.selectTR) {
         return (tr.props.style.backgroundColor = '#343a40')
      }
      return tr
    })
    return (
      <Table className="table" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th onClick={e => this.props.sortGitHubId(e, 'rank')}>
              #{' '}
              {this.props.sortField === 'rank' ? (
                <small>{this.props.sort}</small>
              ) : null}
            </th>
            <th onClick={e => this.props.sortGitHubId(e, 'name')}>
              Name{' '}
              {this.props.sortField === 'name' ? (
                <small>{this.props.sort}</small>
              ) : null}
            </th>
            <th onClick={e => this.props.sortGitHubId(e, 'githubId')}>
              GithubId{' '}
              {this.props.sortField === 'githubId' ? (
                <small>{this.props.sort}</small>
              ) : null}
            </th>
            <th>TotalScore</th>
            <th onClick={e => this.props.sortGitHubId(e, 'locationName')}>
              LocationName{' '}
              {this.props.sortField === 'locationName' ? (
                <small>{this.props.sort}</small>
              ) : null}
            </th>
            <th>TaskResults</th>
            <th>IsActive</th>
          </tr>
        </thead>
        <tbody>{tableList}</tbody>
      </Table>
    )
  }
}
export default TableInfo
