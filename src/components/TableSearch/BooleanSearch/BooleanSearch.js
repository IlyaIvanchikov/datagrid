import React from 'react'
import { Form, Col } from 'react-bootstrap'
import './BooleanSearch.css'
import { connect } from 'react-redux'

const BooleanSearch = props => (
    <Form.Group as={Col} sm={6}>
      <Form.Label  className="mt-3" as="legend">
        Фильтр по активности
      </Form.Label>
        <Form.Check
          type="radio"
          label="Все"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Активные"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Неактивные"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
    </Form.Group>
)

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BooleanSearch)
