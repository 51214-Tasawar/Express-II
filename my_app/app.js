const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./Models/index");

const userRouter = require("./Router/userRouter");
const authRouter = require("./Router/authRouter");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", userRouter);
app.use("/auth", authRouter);

app.get("/all", (req, res) => {
    return res.send("This Is Request for User Info ---> ");
});

sequelize
    .sync({ alter: true })
    .then(() => {
        console.log("Database synced successfully.");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error("Error syncing the database:", error.message);
    });
