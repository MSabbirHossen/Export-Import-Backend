import "dotenv/config";
import app from "../src/app.js";
import connectDB from "../src/config/database.js";

export default async function handler(req, res) {
  try {
    await connectDB();
    return app(req, res);
  } catch (error) {
    console.error("Serverless request failed:", error.message);
    return res.status(500).json({
      status: "error",
      message: "Server failed to connect to required services",
    });
  }
}
