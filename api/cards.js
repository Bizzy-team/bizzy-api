const {chain} = require("@amaurymartiny/now-middleware");

const checkApiKey = require("./_middleware/checkApiKey");
const isConnected = require("./_middleware/isConnected");
const responseServer = require("./_utils/responseServer");
const parseBody = require("./_utils/parseBody");

function Cards (req, res) {
    if (req.method !== "POST") {
        return responseServer(res, 405, {
            content: "POST",
            token: res.locals.forClient.token ? res.locals.forClient.token : undefined
        });
    }

    parseBody(req, res);
    return responseServer(res, 200);
};

module.exports = chain(checkApiKey, isConnected)(Cards);