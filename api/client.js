const axios = require("axios");

const BASEURL =
  "https://my-json-server.typicode.com/higorpo/trilha-dev-json-server";

function client(route) {
  return axios
    .get(`${BASEURL + route}`)
    .then((response) => {
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

function fetchQuestions(id) {
  return client(`/questions/${id}`);
}

function searchQuiz(title) {
  return client(`/quizzes?search=${title}`);
}

module.exports = {
  fetchUser,
  fetchQuizzes,
  fetchQuestions,
  searchQuiz,
};
