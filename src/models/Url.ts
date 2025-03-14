import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    original_url: { type: String, required: true },
    short_code: { type: String, unique: true, required: true },
});

export default mongoose.models.Url || mongoose.model("Url", urlSchema);
