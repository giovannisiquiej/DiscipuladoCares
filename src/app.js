import express from "express";
import cors from "cors";

//importa los routes de cada entidad
import iglesiasRoutes from "./routes/iglesia.routes.js";
import ministrosRoutes from "./routes/ministro.routes.js";
//const cors = require("cors");

//ejecuta el App
const app = express();

// const corsOpt = {
//   origin: /\.onrender\.com$/,
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
// };

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use(iglesiasRoutes);
app.use(ministrosRoutes);

export default app;
