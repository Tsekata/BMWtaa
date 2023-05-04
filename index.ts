import express, {Application, json} from "express"
import { UserRouter } from "./routers/UserRouter"

const app: Application = express()
app.use(json())
app.use("/api/", UserRouter);
app.listen(1111, () => {
    console.log("Connected")
})
