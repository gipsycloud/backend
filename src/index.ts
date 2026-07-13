import compression from 'compression';
import express from "express";
import helmet from "helmet";
import router from "./routes/root";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Security Headers
app.use(helmet());

// Gzip compression
app.use(compression());


app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.use("/api/v1/", router)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});