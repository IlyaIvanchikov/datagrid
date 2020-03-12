import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap'
import './BooleanSearch.css'
import { toggleSearch } from '../../../store/actions/filterBoolean'
import { connect } from 'react-redux'
class BooleanSearch extends Component {
  render() {
    return (
      <Form.Group as={Col} sm={2}>
        <Form.Label className="mt-3" as="legend">
          Фильтр по активности
        </Form.Label>
        {this.props.check.map((item, i) => (
          <Form.Check
            type="switch"
            id={`custom-switch-${i}`}
            label={item.label}
            checked={item.checked}
            key={item.id}
            onChange={() => this.props.toggleSearch(item.id)}
          />
        ))}
      </Form.Group>
    )
  }
}

function mapStateToProps(state) {
  return {
    check: state.check.check,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleSearch: id => dispatch(toggleSearch(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooleanSearch)
