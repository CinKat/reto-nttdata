import { URL_RESULTS } from "./constants";

export function showUsers() {
  return fetch(URL_RESULTS)
    .then((response) => response.json());
}