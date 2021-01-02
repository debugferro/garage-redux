import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchCar } from '../actions/index';

class CarShow extends Component {
  componentDidMount () {
    if (!this.props.car) {
      const id = parseInt(this.props.match.params.id, 10);
      this.props.fetchCar(id);
    }
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    return (
      <p>{this.props.car.model}</p>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCar: fetchCar }, dispatch);
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
  const car = state.cars.find(c => c.id === idFromUrl);
  return { car };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarShow);
