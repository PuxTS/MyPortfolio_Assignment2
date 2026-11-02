import config from "./config/config.js";
import app from "./server/express.js";
import router from "./server/assets-router.js";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri)
  .then(() => {
    console.log("Connected to the Portfolio database!");
  })
  .catch((err) => {
    console.error("Database connection error:", err.message);
  });

app.use("/src", router);

app.get("/", (req, res) => {
  res.send("Welcome to My Portfolio application");
});

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});

export default app;