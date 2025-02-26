const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

const mongoURL =
    "mongodb+srv://aniketan:aniketan01@cluster0.2jdnr.mongodb.net/user";
mongoose
    .connect(mongoURL)
    .then(() => console.log("DB connected..."))
    .catch((err) => console.log(err));


//creating the user schema
const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true },
        password: { type: String, required: true, minlength: 6 },
    });
const User = mongoose.model("User", UserSchema);


//this will create a new account which can be used to login later
app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: encryptedPassword });
        await user.save();
        res.json({ message: "User Registred.." });
        console.log(user.username,"has registered succesfully");
    } catch (err) {
        console.log(err);
    }
});

//login this will check username and password with the db and log you in
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        res.json({ message: "Login Successful", username: user.username });
        console.log(user.username,"logged in succesfully")
    } catch (err) {
        console.log(err);
    }
});

app.listen(PORT, () => console.log("Server running on port 5000"));
