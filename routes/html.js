// const path = require("path");

// module.exports = function (app) {
//     app.get("/", function (req, res) {
//         res.sendFile(path.join(__dirname, "../public/index.html"));
//     });

//     app.get("/exercise", function (req, res) {
//         res.sendFile(path.join(__dirname, "../public/exercise.html"));
//     });

//     app.get("/stats", function (req, res) {
//         res.sendFile(path.join(__dirname, "../public/stats.html"));
//     });
// };
const router = require("express").Router();
const path = require("path");

    router.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    router.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    router.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

module.exports = router;