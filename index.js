import app from "./src/app.js";
import { sequelize } from "./src/database/database.js";

async function main() {
  try {
    await sequelize.sync({ force: true });

    app.listen(3000);
    console.log("Server esta corriendo en el puerto: ", 3000);
  } catch (error) {
    console.log("No fue posible conecta la DB", error);
  }
}

main();
