const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/tasks", taskRoutes);
app.use("/user", userRoutes);

const server = app.listen(port, () => {
  console.log(`Servidor levantado y escuchando en el puerto: ${port}`);
});

module.exports = { app, server };
