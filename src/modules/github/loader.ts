const REQUEST_URL = `https://api.github.com/search/repositories?q=`;

const toJSON = (response) => response.json();

const checkResponseStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.status}`);
  }
};

export class Loader {
  static loadData(project) {
    return fetch(`${REQUEST_URL}${project}`).
      then(checkResponseStatus).
      then(toJSON);
  }
}
