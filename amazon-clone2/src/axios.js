import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-6a45d.cloudfunctions.net/api",
  // "http://localhost:5001/clone-6a45d/us-central1/api", //api url (cloud functioncd)
});

export default instance;

// https://us-central1-clone-6a45d.cloudfunctions.net/api
