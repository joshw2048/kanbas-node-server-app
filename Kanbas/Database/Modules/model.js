import mongoose from "mongoose";
import schema from "./schema.js";
const modulesModel = mongoose.model("ModulesModel", schema);
export default modulesModel;