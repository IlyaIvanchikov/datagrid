import React from 'react'
import { Form, Col } from 'react-bootstrap'
import BooleanSearch from './BooleanSearch/BooleanSearch'
import EnumSearch from './EnumSearch/EnumSearch'
import CSV from './CSV/CSV'
import './TableSearch.css'
import { connect } from 'react-redux'
import { changeHandler } from '../../store/actions/filterAll'

const TableSearch = props => (
  <Form>
    <Form.Row>
      <Form.Group as={Col} sm={4} controlId="formBasicEmail">
        <Form.Label className="mt-3">Фильтрация</Form.Label>
        <Form.Control
          onChange={e => props.changeHandler(e.target.value)}
          value={props.search}
          type="email"
          placeholder="Введите текст"
        />
        <Form.Text className="text-muted">
          Введите что-нибудь для поиска.
        </Form.Text>
      </Form.Group>
      <BooleanSearch />
      <EnumSearch />
      <CSV />
    </Form.Row>
  </Form>
)

function mapStateToProps(state) {
  return {
    search: state.search.search,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeHandler: value => dispatch(changeHandler(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableSearch)
