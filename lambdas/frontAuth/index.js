require("dotenv").config();

exports.handler = (event, context, callback) => {
  // Get the request and its headers
  const { request } = event.Records[0].cf;
  const { headers } = request;

  // Specify the username and password to be used
  const user = process.env.ID_LAMBDA;
  const pw = process.env.PSWD_LAMBDA;

  // Build a Basic Authentication string
  const authString = `Basic ${Buffer.from(`${user}:${pw}`).toString("base64")}`;

  // Challenge for auth if auth credentials are absent or incorrect
  if (
    typeof headers.authorization === "undefined" ||
    headers.authorization[0].value != authString
  ) {
    const response = {
      status: "401",
      statusDescription: "Unauthorized",
      body: "Unauthorized",
      headers: {
        "www-authenticate": [{ key: "WWW-Authenticate", value: "Basic" }]
      }
    };
    callback(null, response);
  }

  // User has authenticated
  callback(null, request);
};
