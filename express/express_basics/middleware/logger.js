function logger(req, res, next) {
    console.log("----------- New Request -----------");
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    if (req.body && Object.keys(req.body).length > 0) {
        console.log("Body:", req.body);
    }

    console.log("-----------------------------------");

    next();
}

module.exports = logger;