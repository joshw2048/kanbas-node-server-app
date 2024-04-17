import * as dao from "./dao.js";

function ModuleRoutes(app) {
  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body)
    res.json(status);
  });
  app.delete("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const status = await dao.deleteModule(mid);
    res.json(status);
  });
  app.post("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    const module = await dao.createModule(newModule)
    const newlyCreated = await dao.findModuleById(req.body.id)
    res.send(newlyCreated[0]);
  });
  app.get("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.getAllModulesForCourse(cid);
    res.send(modules);
  });
  app.get("/api/modules", async (req, res) => {
    const modules = await dao.getAllModules();
    res.send(modules);
  });
}
export default ModuleRoutes;