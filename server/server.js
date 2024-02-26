const express = require('express')
const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 8000;

app.use(cors());


app.get("/api", (req, res) => {
    const users = ["userOne", "userTwo", "userThree"];
    res.json({ users });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});