const mongoose = require("mongoose");

async function test() {
  await mongoose.connect("mongodb://127.0.0.1:27017/signup_api");

  const Test = mongoose.model(
    "Test",
    new mongoose.Schema({
      name: String,
    })
  );

  const doc = await Test.create({
    name: "Amina",
  });

  console.log(doc);

  await mongoose.disconnect();
}

test().catch(console.error);