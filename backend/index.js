import { StartServer } from "./serv.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 0;
const frontend_url = process.env.FRONTEND_URL || "http://localhost:3000";

StartServer(port, frontend_url);