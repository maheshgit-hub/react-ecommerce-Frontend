export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO we will not hard-core server URL here
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter) {
  let queryString = "";
  for (let key in filter) {
    console.log(key)
    queryString += `${key}=${filter[key]}&`;
    console.log(queryString);
  }

  return new Promise(async (resolve) => {
    //TODO we will not hard-core server URL here
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
