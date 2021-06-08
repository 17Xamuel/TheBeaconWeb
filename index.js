const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public", { extensions: ["html", "htm"] }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/app/", require("./routes/app.routes"));
app.use("/api/web/", require("./routes/web.routes"));

app.get("/api/new_course", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}....`);
});
