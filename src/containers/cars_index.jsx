import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCars } from '../actions';
import _ from 'lodash';

class CarsIndex extends Component {

  componentWillMount() {
    this.props.setCars();
  }

  renderList = () => {
    return (_.map(this.props.cars, (car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="product">
            <div className="product-body">
            <h3> {car.brand} - {car.model} </h3>
            <p> Owner: {car.owner} </p>
            </div>
          </div>
        </Link>
      );
    }))
  };

  render() {
    return(
      <div >
       {this.renderList().reverse()}
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCars: setCars },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
