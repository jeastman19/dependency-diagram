const app = require("./app");
const config = require("./config");

app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
});
