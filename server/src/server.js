import express from "express"
import { ENV } from "./lib/env.js"
import path from "path"
import connectDB from "./lib/db.js"
import cors from "cors"
import { serve } from "inngest/express"
import { inngest, functions } from "./lib/ingest.js"

const app = express()
const __dirname = path.resolve()

// * middleware
app.use(express.json());
app.use(cors(
    {
        origin: ENV.CLIENT_URL,
        credentials: true,
    }
))


// * 
app.use("/api/inngest", serve({ client: inngest, functions }))
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

        res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
    });

}




const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, () => {
            console.log(`server running at http://localhost:${ENV.PORT}`);
        })
    } catch (error) {
        console.error("Error While starting the server.")
    }
}


startServer();















