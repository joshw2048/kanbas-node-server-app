import mongoose from "mongoose";
	
const moduleSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: String,
    course: String,
    lessons: [{
      id: { type: String, required: true, unique: true},
      name: { type: String, required: true },
      description: String,
      module: String,
    }]
  },
  { collection: "modules" });

export default moduleSchema;