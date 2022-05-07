import { server } from "./core/server";
import workoutRoutes from "./v1/routes";

const PORT = process.env.PORT || 3000;

server.use("/api/v1", workoutRoutes);

server.listen(PORT, () => console.log("Server is running on port: ", PORT));
