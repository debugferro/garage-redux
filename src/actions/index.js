// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';

export function fetchCars(garageName) {
  const root_url = `https://wagon-garage-api.herokuapp.com/${garageName}/cars`
  const promise = fetch(root_url)
    .then(response => response.json());

    return {
      type: FETCH_CARS,
      payload: promise
    }
}

export function CreateCar(garageName, values, callback) {
  let root_url = `https://wagon-garage-api.herokuapp.com/${garageName}/cars`
  const body = { author: username, content: messageContent };
  const promise = fetch(root_url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());


}
