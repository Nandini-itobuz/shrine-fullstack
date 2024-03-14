import config from "./constants/config.js"
import express from "express";
import cors from "cors";
import {homeRouter} from "./router/home-routers.js"

console.log(config)
const { port } = config;


const app = express();

app.use(express.json())
// const port = 8081;
app.use(cors());
app.use('/',homeRouter)


app.listen(port, () => {
  console.log(`listing to port ${port}`);
});
