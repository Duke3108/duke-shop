import userRouter from "./user.js";
import productRouter from "./product.js";
import { errHandler, notFound } from "../middlewares/errorHandler.js";

const initRoutes = (app) => {
    app.use('/api/user', userRouter)
    app.use('/api/product', productRouter)

    app.use(notFound)
    app.use(errHandler)
}

export default initRoutes