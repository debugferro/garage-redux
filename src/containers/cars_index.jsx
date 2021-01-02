import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions/index';

class CarsIndex extends Component {

  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  renderCars = () => {
    return this.props.cars.map((car) => {
      return (
        <div key={car.id}>
          <Link to={`/cars/${car.id}`}>
            <p><strong>{car.brand} - {car.model}</strong></p>
          </Link>
          <p><strong>OWNER:</strong> {car.owner}</p>
        </div>
      );
    })
  }

  render() {
    return (
      <div>
        <div>
          {this.renderCars()}
        </div>
        <div>
          <Link to={'/cars/new'}>
            Insert New Car
          </Link>
        </div>
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
