const { readdir } = require("fs");

const routes = {
  "/forgot": "send mail for resset password.",
  "/login": "connect an user.",
  "/logout": "Logout an user.",
  "/register": "Create an user in bdd.",
  "/resetpassword": "Reset password user."
};

/**
 * Return all routes availables for the Bizzy API.
 */
exports.handler = function Home(event, context, cb) {
  console.log("TESTT");
  context.callbackWaitsForEmptyEventLoop = false;

  readdir(event.stage === "dev" ? "/" : "/opt", { withFileTypes: true }, function(
    err,
    files
  ) {
    if (err) return cb(err);

    cb(null, {
      statusCode: 200,
      headers: {
        "x-custom-header": "My Header Value"
      },
      body: JSON.stringify({ message: "Hello World!" })
    });
  });
  // if (req.method !== "GET") {
  //   return responserServer(res, 405, {
  //     content: "GET"
  //   });
  // }

  // const apiUrl =
  //   process.env.NODE_ENV === "development"
  //     ? "https://dev-api-bizzy.vercel.app"
  //     : "api-bizzy.vercel.app";
  // const objToReturn = {};

  // routes.forEach(i => {
  //   objToReturn[i.action] = `${apiUrl}/api${i.route}`;
  // });

  // return responserServer(res, 200, {
  //   modifyResponse: { ...objToReturn }
  // });
};
