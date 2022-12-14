require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");
//connect db
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-learnit.ygpexhl.mongodb.net/?retryWrites=true&w=majority`,
      {
        // useCreateIndex: true,
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useFindAndModify: false,
      }
    );

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
connectDB();

const app = express();
app.use(express.json()); //midleware để server có thể đọc dc từ body dạng json
app.use(cors());
// app.get("/", (req, res) => res.send("hello haha"));
app.use('/api/auth',authRouter);
app.use("/api/posts", postRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
