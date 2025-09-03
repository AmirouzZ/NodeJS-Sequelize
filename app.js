const express = require("express");
const { sequelize, User, Post } = require("./models");

const app = express();

app.use(express.json());

app.post("/users", async (req, res) => {
  let { email, name, role } = req.body;

  try {
    let user = await User.create({
      email,
      name,
      role,
    });

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
});

app.get("/users", async (req, res) => {
  try {
    let users = await User.findAll();

    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
  }
});

app.get("/users/:userId", async (req, res) => {
  try {
    let user = await User.findOne({
      where: {
        uuid: req.params.userId,
      },
      include: "posts",
    });

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
});

app.post("/posts", async (req, res) => {
  let { desc, userId } = req.body;

  let user = await User.findOne({
    where: {
      uuid: userId,
    },
  });

  try {
    let post = await Post.create({
      desc,
      userId: user.id,
    });

    res.status(200).json({ post });
  } catch (error) {
    console.log(error);
  }
});

app.get("/posts", async (req, res) => {
  try {
    let posts = await Post.findAll({ include: ["user"] });

    res.status(200).json({ posts });
  } catch (error) {
    console.log(error);
  }
});

app.get("/posts/:postId", async (req, res) => {
  try {
    let post = await Post.findOne({
      where: {
        uuid: req.params.postId,
      },
      include: [{ model: User, as: "user" }],
    });

    res.status(200).json({ post });
  } catch (error) {
    console.log(error);
  }
});

// async function main() {
//   await sequelize.sync({ alter: true });
// }

// main();

const port = process.env.PORT || 5000

app.listen(port, async () => {
  console.log("Server is running");
  // await sequelize.sync({ alter: true });
  // console.log("Database Synced");
  await sequelize.authenticate();
  console.log("Database Connected");
});
