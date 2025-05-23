import express from "express";
import dotenv from "dotenv";
import connectDB from "./data/connectDB";
import authRoutes from "./routes/authRoutes";
import wardrobeRoutes from "./routes/wardrobeRoutes";
import outfitRoutes from "./routes/outfitRoutes";
import wishlistRoutes from "./routes/wishlistRoutes";
import cors from 'cors';
import userRoutes from "./routes/userRoutes";
import chatRoutes from "./routes/chatRoutes";

dotenv.config();
connectDB();

const app = express();
const PORT = 5001;

app.use(express.json());

app.use(cors({
  origin: '*',
  credentials: true
}));

// Rotas
app.use("/api/auth", authRoutes);
app.use("/api/wardrobe", wardrobeRoutes)
app.use("/api/outfits", outfitRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes)

app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
});

process.on("SIGINT", async () => {
  console.log("🛑 Encerrando servidor...");
  process.exit(0);
});