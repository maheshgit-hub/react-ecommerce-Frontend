export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO we will not hard-core server URL here
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter,sort) {
  let queryString = "";
  for (let key in filter) {
    console.log(key);
    const categoryValues = filter[key];
    if (categoryValues.length > 0) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
    console.log(queryString);
  }
for(let key in sort){
  queryString+=`${key}=${sort[key]}&`
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
