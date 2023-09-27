import express from "express";

//importa los routes de cada entidad
import iglesiasRoutes from "./routes/iglesia.routes.js";
import ministrosRoutes from "./routes/ministro.routes.js";

//ejecuta el App
const app = express();

//middlewares
app.use(express.json());

//routes
app.use(iglesiasRoutes);
app.use(ministrosRoutes);

export default app;
