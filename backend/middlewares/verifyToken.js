const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeaders = req.headers.Authorization;

    if (!authHeaders) {
        res.status(400).json({
            message: "token manquante"
        })
    }

    const token = authHeaders.split(" ")[0];

    try {
        const decoded = jwt.verify(token, "SECRET_KEY");
        req.user = decoded;
        next();
    } catch (error) {
        next(error)
    }
}

module.exports = verifyToken;