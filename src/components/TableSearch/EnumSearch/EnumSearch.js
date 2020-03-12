import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap'
import './EnumSearch.css'
import { selectedValues } from '../../../store/actions/filterEnum'
import { connect } from 'react-redux'
import { Multiselect } from 'multiselect-react-dropdown'

class EnumSearch extends Component {
  constructor(props) {
    super(props);
      this.multiselectRef = React.createRef();
  }
  render() {
    return (
      <Form.Group as={Col} sm={6}>
        <Form.Label className="mt-3" as="legend">
          Фильтры по городу
        </Form.Label>
        <Multiselect
          as={Col}
          sm={3}
          ref={this.multiselectRef}
          options={this.props.enum}
          onSelect={() => {this.props.selectedValues(this.multiselectRef.current.getSelectedItems())}}
          onRemove={() => {this.props.selectedValues(this.multiselectRef.current.getSelectedItems())}}
          displayValue="name"
        />
        
      </Form.Group>
    )
  }
}


function mapStateToProps(state) {
  return {
    enum: state.enum.enum,
    selectedValues: state.enum.selectedValues,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectedValues: (item) => dispatch(selectedValues(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnumSearch)
