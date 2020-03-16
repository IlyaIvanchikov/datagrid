import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import './Table.css'
import { FixedSizeList as List } from 'react-window'

class TableInfo extends Component {
  render() {
    const tableList = this.props.data.map((item, index) => (
      <tr
        key={item.id}
        onClick={e => this.props.selectRow(e, index)}
        style={{ backgroundColor: 'grey' }}
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

    const test = ({ index, style }) => {
      const item = this.props.data[index]
      return (
        <tr
          key={item.id}
          onClick={e => this.props.selectRow(e, index)}
          style={style}
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
      )
    }
    //console.log(test)
    tableList.map((tr, index) => {
      if (index === this.props.selectTR) {
        return (tr.props.style.backgroundColor = '#343a40')
      }
      return tr
    })
    //console.log(this.props.data.length)
    return (
      <Table className="table" striped bordered hover variant="dark">
        <thead>
          <tr >
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
        <List
          className="List"
          outerElementType="tbody"
          innerElementType="tr"
          height={1000}
          //itemData={this.props.data}
          itemCount={this.props.data.length}
          itemSize={50}
          // style={{ display: "block" }}
          width={700}
        >
          {test}
        </List>
      </Table>
    )
  }
}
export default TableInfo
