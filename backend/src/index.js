import config from "./constants/config.js"
import express from "express";
import cors from "cors";
import {homeRouter} from "./router/home-routers.js"
import { aboutUsRouter } from "./router/PagesRouters/AboutUsRouters.js";
import { faqRouter } from "./router/PagesRouters/FaqRouters.js";
import {carousalImageRouter} from "./router/CarousalImageRouter.js"

console.log(config)
const { port } = config;


const app = express();
app.use(express.json())
app.use(cors());
app.use('/',homeRouter)
app.use('/aboutus',aboutUsRouter)
app.use('/faq',faqRouter)
app.use('/images',carousalImageRouter);

app.listen(port, () => {
  console.log(`listing to port ${port}`);
});
