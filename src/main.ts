import bodyParser from "body-parser";
import express from "express";
import { routes } from "./routes";

const cors = require('cors')

//criando aplicação express
const app = express();


//utilizando o bodyParse
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Setando rotas no servidor
app.use(routes);


//utilizando o cors
app.use(cors());

app.listen(3000, () => console.log("Server is running in port 3000"))

