import axios from "axios";

function fetch() {
  return axios
    .get("http://localhost:3000/data")
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

export async function fetchProducts() {
  const res = await fetch();
  return res;
}
