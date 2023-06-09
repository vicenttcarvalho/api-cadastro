import { createTable, insertUsers } from "./controllers/UserController.js";
import express from "express";

const app = express();
app.use(express.json());

createTable();

app.post('/users', function(require, response){ 
  insertUsers(require.body);
  response.json({
    "statusCode":200
  })
})

app.listen(3000, () => console.log("Rodando com sucesso!"))