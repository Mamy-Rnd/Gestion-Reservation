require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");


app.use(cors());
app.use(express.json());

require("./Config/db");

const authRoutes = require("./Routes/auth.routes");
const vehiculeRoutes = require("./Routes/vehicule.routes");
const TrajetRoutes = require("./Routes/trajet.routes");
const PlaceRoutes = require("./Routes/place.routes");
const VoyagesRoutes = require("./Routes/voyages.routes");


app.use("/api", authRoutes);
app.use("/api", vehiculeRoutes);
app.use("/api", TrajetRoutes);
app.use("/api", PlaceRoutes);
app.use("/api", VoyagesRoutes);


require("./middlewares/errorHandling")

app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000");

})