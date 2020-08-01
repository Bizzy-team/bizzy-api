const responserServer = require("./_utils/responseServer");
const routes = require("./_utils/routes");

module.exports = function Home(req, res) {
    if (req.method !== "GET") {
        return responserServer(res, 405, {
            content: "GET"
        });
    }

    const apiUrl = process.env.NODE_ENV === "development" ? "https://dev-api-bizzy.vercel.app" : "api-bizzy.vercel.app";
    const objToReturn = {};
    
    routes.forEach((i) => objToReturn[i.action] = `${apiUrl}/api${i.route}`);

    return responserServer(res, 200, {
        modifyResponse: {...objToReturn}
    });
}