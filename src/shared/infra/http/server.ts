import "dotenv/config";
import { Connection } from "../mongoose";
import { app } from "./app";

// dotenv.config();
Connection();

app.listen(process.env.PORT || 3333, () => console.log("Server is running"));
