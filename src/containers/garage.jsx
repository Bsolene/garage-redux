import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Garage extends Component {

  render() {
    return(
      <div
        className="banner"
        style={{ backgroundImage: `url(https://kitt.lewagon.com/placeholder/cities/berlin)`}}
      >
        <div className="banner-content">
          <h2>{this.props.garage}</h2>
          <Link className="btn btn-primary btn-cta" to="/cars/new">
            Add a new car
          </Link>
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default connect(mapStateToProps)(Garage);




