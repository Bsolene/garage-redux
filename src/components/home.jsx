import React from 'react';
import CarsIndex from '../containers/cars_index';
import CarsNew from '../containers/cars_new';
import Garage from '../containers/garage';

const Home = () => {
  return (
    <div className="app">
      <div className="garage">
        <Garage />
      </div>
      <div>
        <CarsIndex/>
      </div>
    </div>
  );
};

export default Home;
