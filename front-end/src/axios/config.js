import axios from "axios";


const devBurgerFetch = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default devBurgerFetch;