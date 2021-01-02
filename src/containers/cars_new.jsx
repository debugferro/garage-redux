import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, Form } from 'redux-form';
import { createCar } from '../actions';

class CarsNew extends Component {
  handleSubmit = (values) => {
    this.props.createCar(this.props.garage, values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    return[
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          label="Brand"
          name="brand"
          type="text"
          component="input"
        />
        <Field
          label="Model"
          name="model"
          type="text"
          component="input"
        />
      </form>
    ];
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, { createCar })(CarsNew)
);
