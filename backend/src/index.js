import config from "./constants/config.js"
import express from "express";
import cors from "cors";
import {homeRouter} from "./router/home-routers.js"
import { aboutUsRouter } from "./router/PagesRouters/AboutUsRouters.js";
import { faqRouter } from "./router/PagesRouters/FaqRouters.js";
import {carousalImageRouter} from "./router/CarousalImageRouter.js"
import { galleryRouter } from "./router/PagesRouters/GalleryRouters.js";
import eventRouter from './router/PagesRouters/EventsRouter.js'
import { videoRouter } from "./router/PagesRouters/VideoRouters.js";
import { blogRouter } from "./router/PagesRouters/BlogRouters.js";

const { port } = config;

const app = express();
app.use(express.json())
app.use(cors());
app.use('/',homeRouter)
app.use('/aboutus',aboutUsRouter)
app.use('/faq',faqRouter)
app.use('/images',carousalImageRouter);
app.use('/gallery',galleryRouter)
app.use('/currentevent',eventRouter);
app.use('/video',videoRouter);
app.use('/blog',blogRouter)

app.listen(port, () => {
  console.log(`listing to port ${port}`);
});
