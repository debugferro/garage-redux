import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, Form } from 'redux-form';
import { createCar } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    return[
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} key="form">
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
        <Field
          label="Owner"
          name="owner"
          type="text"
          component="input"
        />
        <Field
          label="Plate"
          name="plate"
          type="text"
          component="input"
        />
        <button type="submit">Create</button>
      </form>
    ];
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createCar: createCar }, dispatch );
}

export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, mapDispatchToProps)(CarsNew)
);
