import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCar, fetchCar } from '../actions/index';
import { Link } from 'react-router-dom';


class CarsShow extends Component {

  componentDidMount() {
    this.props.fetchCar(this.props.match.params.id);
  }

  handleClick = (id) => {
    this.props.deleteCar(id, () => {
      this.props.history.push('/');
    });
  }

  render() {

    const { car } = this.props;

    if (!car) {
      return <p>Loading...</p>;
    }

    return(
      <div className="product">
        <p className="product-image text-center">{car.plate}</p>
        <div className="product-body">
          <h3>{car.brand} - {car.model}</h3>
          <p>Owner: {car.owner}</p>
        </div>
        <Link to="/">Back </Link>
        <p onClick={() => this.handleClick(car.id) } >Delete</p>
      </div>
    );
  }

}

function mapStateToProps(state, ownProps) {

  // const id = parseInt(ownProps.match.params.id);
  return {
    car: state.cars[0]
    // .find( (car) => car.id === id)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteCar, fetchCar }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
