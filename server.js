const express = require("express");
const app = express();

require("dotenv").config();
require("./models/User");

require("./services/passport");
require("./services/mongoDB");
require("./services/expressConfig")(app);

require("./routes/auth")(app);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
