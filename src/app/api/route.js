import { NextResponse } from "next/server";
import mongoose from "mongoose";

const { username, password } = process.env;
const conStr = `mongodb+srv://${username}:${password}@test.ltrme.mongodb.net/neogymDB?retryWrites=true&w=majority`;
const conn = async () => {
  // await mongoose.connect("mongodb://localhost:27017/gym");
  try {
    await mongoose.connect(conStr);
  } catch (e) {
    console.log("Something went wrong", e);
  }
};

const gymSchema = mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  message: String,
});

export async function GET() {
  return new NextResponse({ name: "dhiraj" });
}
export async function POST(req) {
  const body = await req.json();
  const { name, email, phone, message } = body;
  if (!name || !email || !phone || !message) {
    return Response.json({ data: "enter all fields" }, { status: "400", headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }, });
  }
  conn();
  const gymModel =
    mongoose.models.Contact || mongoose.model("Contact", gymSchema);
  const data = new gymModel({
    name,
    phone,
    email,
    message,
  });
  const resp = await data.save();
  if (resp) {
    return Response.json({ data: "Saved" }, { status: "200", headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }, });
  }
}
