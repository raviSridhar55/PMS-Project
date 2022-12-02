import axios from "axios";
const setAuthToken = (token) => {
  if (token) {
    // axios.defaults.headers.common["x-auth-token"] = token;
    // axios.defaults.headers.authorization &&
    // axios.defaults.headers.authorization.startsWith("Bearer")
    token = axios.defaults.headers.authorization;

    // .startsWith("Bearer")
    // .split(" ")[1];
    console.log(token);
  } else {
    delete axios.defaults.headers.authorization
      .startsWith("Bearer")
      .split(" ")[1];
  }
};
export default setAuthToken;
