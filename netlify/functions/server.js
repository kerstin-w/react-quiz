/**
 * The above function exports an asynchronous handler that returns a JSON response containing a list of
 * questions.
 * @returns The handler function is returning an object with two properties: "statusCode" and "body".
 * The "statusCode" property is set to 200, indicating a successful response, and the "body" property
 * is set to the JSON string representation of the "questions" array from the "./data/questions.json"
 * file.
 */
exports.handler = async (event, context) => {
  const questions = require("../data/questions.json");
  return {
    statusCode: 200,
    body: JSON.stringify(questions),
  };
};
