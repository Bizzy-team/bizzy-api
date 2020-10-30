const response = require("/opt/response");

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
  context.callbackWaitsForEmptyEventLoop = false;

  return cb(
    null,
    response(200, {
      modifyResponse: { ...routes }
    })
  );
};
