import { CLIENT_RENEG_LIMIT } from "tls";
import { AppDataSource } from "./config/data-source";
import { PORT } from "./config/envs";
import app from "./server";
import { log } from "console";
import { start } from "repl";

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected...")
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    }
    )
    .catch((error) => console.log(error))
