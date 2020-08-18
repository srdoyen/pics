import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID bdPRUtnb-3YeYM2kRhuDNO0QdSJ4mwn7D0K0e-Z3t00",
  },
});
