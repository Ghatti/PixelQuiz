const axios = require("axios");

const BASEURL =
  "https://my-json-server.typicode.com/higorpo/trilha-dev-json-server";

function client(route) {
  return axios
    .get(`${BASEURL + route}`)
    .then((response) => {
      console.log(BASEURL + route);
      return {
        success: true,
        data: response.data,
      };
    })
    .catch((err) => {
      return { success: false, err };
    });
}

function fetchUser() {
  return client("/profile");
}

function fetchQuizzes() {
  return client("/quizzes");
}

module.exports = {
  fetchUser,
  fetchQuizzes,
};
