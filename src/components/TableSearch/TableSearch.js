import React from 'react'
import { Form } from 'react-bootstrap'
import './TableSearch.css'
import { connect } from 'react-redux'
import { changeHandler } from '../../store/actions/filterAll'

const TableSearch = props => (
  <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label className="mt-3">Сортировка</Form.Label>
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
