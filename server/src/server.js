import express from "express"
import { ENV } from "./lib/env.js"
import path from "path"



const app = express()

const __dirname = path.resolve()



app.get('/book', (req, res) => {
    res.status(200).json({
        msg: "success from api",
    })
})
app.get('/health', (req, res) => {
    res.status(200).json({
        msg: "ok",
    })
})



// * make out app ready for deployment

if (ENV.NODE_ENV == 'production') {

    // * make react app as our static file
    app.use(express.static(path.join(__dirname, "../client/dist")))

    app.get("/{*any}", (req, res) => {

        res.sendFile(path.join(__dirname, "../client","dist","index.html"));
    });

}






app.listen(ENV.PORT, () => {
    console.log(`server running at http://localhost:${ENV.PORT}`);
})





















