const express = require("express");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const mongoose = require("mongoose");




const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;

const mongoURL = "mongodb+srv://aniketan:aniketan01@cluster0.2jdnr.mongodb.net/Anketo";
mongoose
    .connect(mongoURL)
    .then(() => console.log("DB connected..."))
    .catch((err) => console.log(err));

// Creating the user schema
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },
});
const User = mongoose.model("User", UserSchema);

// Register route
app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: encryptedPassword });
        await user.save();
        res.json({ message: "User Registered.." });
        console.log(user.username, "has registered successfully");
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Login route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        res.json({ message: "Login Successful", username: user.username });
        console.log(user.username, "logged in successfully");
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(PORT, () => console.log("Server running on port 8080"));