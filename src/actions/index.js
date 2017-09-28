// TODO: add and export your own actions
export const SET_CARS = 'SET_CARS';
export const CAR_CREATED = 'CAR_CREATED';
export const CAR_DELETED = 'CAR_DELETED';
export const FETCH_CAR = 'FETCH_CAR';

const ROOT_URL = 'https://wagon-garage-api.herokuapp.com/wagon/cars';

export function setCars() {
  const promise = fetch(`${ROOT_URL}`)
    .then(response => response.json());

  return {
    type: SET_CARS,
    payload: promise
  };
}

export function fetchCar(id) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(response => response.json());

  return {
    type: FETCH_CAR,
    payload: promise
  };
}

export function createCar(body, callback) {
  const request = fetch(`${ROOT_URL}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(() => callback());

  return {
    type: CAR_CREATED,
    payload: request
  };
}

export function deleteCar(id, callback) {
  const request = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(() => callback());

  return {
    type: CAR_DELETED,
    payload: request
  };
}
