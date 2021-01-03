// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const DELETE_CAR = 'DELETE_CAR';
export const CREATE_CAR = 'CREATE_CAR';

export function fetchCars(garageName) {
  const root_url = `https://wagon-garage-api.herokuapp.com/${garageName}/cars`;
  const promise = fetch(root_url)
    .then(response => response.json());

    return {
      type: FETCH_CARS,
      payload: promise
    }
}

export function fetchCar(id) {
  const root_url = `https://wagon-garage-api.herokuapp.com/cars/${id}`;
  const promise = fetch(root_url)
    .then(response => response.json());

  return {
    type: FETCH_CAR,
    payload: promise
  }
}

export function deleteCar(id, callback) {
  const root_url = `https://wagon-garage-api.herokuapp.com/cars/${id}`;
  const promise = fetch(root_url, {
    method: 'DELETE'
  }).then(response => response.json())
    .then(() => callback());

  return {
    type: DELETE_CAR,
    payload: promise
  }
}

export function createCar(garageName, values, callback) {
  const root_url = `https://wagon-garage-api.herokuapp.com/${garageName}/cars`;
  const body =
    {
      brand: values.brand,
      model: values.model,
      owner: values.owner,
      plate: values.plate
    };

  const request = fetch(root_url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
    }).then(response => response.json())
      .then(() => callback());

    return {
      type: CREATE_CAR,
      payload: request
    }
}
