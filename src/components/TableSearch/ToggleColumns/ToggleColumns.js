import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { toggleColumns } from '../../../store/actions/filterColumns'
class ToggleColumns extends Component {
  render() {
    return (
      <Form.Group as={Col} sm={2}>
        <Form.Label className="mt-3" as="legend">
          Фильтр по таблицам
        </Form.Label>
        {this.props.columns.map((item, i) => (
          <Form.Check
            type="radio"
            id={`custom-radio-${i}`}
            label={item.label}
            checked={item.checked}
            key={item.id}
            onChange={() => this.props.toggleColumns(item.id)}
          />
        ))}
      </Form.Group>
    )
  }
}

function mapStateToProps(state) {
  return {
    columns: state.columns.columns,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleColumns: id => dispatch(toggleColumns(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleColumns)
