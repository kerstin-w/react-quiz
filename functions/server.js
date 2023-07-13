export default async function handler() {
  const questions = require("./data/questions.json");
  return {
    statusCode: 200,
    body: JSON.stringify(questions),
  };
}
