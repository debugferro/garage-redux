// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';
export const CREATE_CAR = 'CREATE_CAR'

export function fetchCars(garageName) {
  const root_url = `https://wagon-garage-api.herokuapp.com/${garageName}/cars`
  const promise = fetch(root_url)
    .then(response => response.json());

    return {
      type: FETCH_CARS,
      payload: promise
    }
}

export function createCar(garageName, values, callback) {
  let root_url = `https://wagon-garage-api.herokuapp.com/${garageName}/cars`
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

    console.log(request);
    console.log(body);

    return {
      type: CREATE_CAR,
      payload: request
    }
}
