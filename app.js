const express = require("express");
const connectDB = require("./config/db");
const app = express();
const contactRouter = require("./routes/contact");

// connection database
connectDB();

// middleWares
app.use(express.json());

// routes
app.use("/api/contacts", contactRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
