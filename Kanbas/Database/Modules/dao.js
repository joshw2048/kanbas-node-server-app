import model from "./model.js";
export const createModule = (module) => {
  delete module._id;
  model.create(module);
}
export const getAllModules = () => model.find();
export const getAllModulesForCourse = (courseId) => model.find({ course: courseId });
export const findModuleById = (fakeId) => model.find({ id: fakeId })
export const updateModule = (moduleId, module) =>  model.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });