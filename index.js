const app = require("./app.js");
const config = require("./config/config.js");
const port = config.app.port;

app.listen(port, () => {
  console.log(" runnig");
});
