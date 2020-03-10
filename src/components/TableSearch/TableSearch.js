import React from 'react'
import { Form } from 'react-bootstrap'
import './TableSearch.css'

const TableSearch = props => (
  <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        Введите что-нибудь для поиска.
      </Form.Text>
    </Form.Group>
  </Form>
)

export default TableSearch
