import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions/index';

class CarsIndex extends Component {

  componentWillMount() {
    this.props.fetchCars(this.props.garage);
    console.log(this.props.cars);
  }

  renderCars = () => {
    return this.props.cars.map((car) => {
      return (
        <p>{car}</p>
      );
    })
  }

  render() {
    return (
      <div>
        {this.renderCars()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cars: state.cars, garage: state.garage };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
