const { server } = require("./src/server");
const { conn } = require("./src/db");
const PORT = 3001;

server.listen(PORT, async () => {
  await conn.sync({ force: false, logging: false });
  console.log(`Server escuchando por el puerto: ${PORT}`);
});
