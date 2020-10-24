const forgotDb = require("./dbController");

exports.handler = async function() {};

function Forgot(req, res) {
  if (req.method !== "POST") {
    return responseServer(res, 405, {
      content: "POST"
    });
  }

  parseBody(req, res);
  return req.on("bodyParsed", httpBody => {
    const q = Object.keys(httpBody);

    if (q.length > 1) {
      responseServer(res, 400, {
        content: "Too many parameters."
      });
    }

    if (!q.includes("mail")) {
      responseServer(res, 422);
    }

    return forgotDb(httpBody, req.mongoClient).then(result => {
      responseServer(res, result.code, {
        serverHeader: result.serverHeader ? { ...result.serverHeader } : {},
        content: result.content ? result.content : undefined,
        modifyResponse: result.data ? { ...result.data } : undefined
      });
    });
  });
}
