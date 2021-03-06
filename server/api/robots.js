const router = require("express").Router();
const { Robot, Project, RobotProject } = require("../db/index");

router.get("/", async (req, res, next) => {
  try {
    const robots = await Robot.findAll({
      include: { model: Project },
    });
    res.json(robots);
  } catch (err) {
    next(err);
  }
});

router.get("/project/:id", async (req, res, next) => {
  try {
    const robotProjects = await RobotProject.findAll({
      where: {
        projectId: req.params.id,
      },
    });

    const robots = await Promise.all(
      robotProjects.map(async (robotProject) => {
        const robot = await Robot.findOne({
          where: {
            id: robotProject.robotId,
          },
          include: {
            model: Project,
          },
        });
        return robot;
      })
    );

    res.json(robots);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const robot = await Robot.findOne({
      where: {
        id: req.params.id,
      },
      include: Project,
    });
    res.json(robot);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const robot = await Robot.create(req.body);
    res.json(robot);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const robot = await Robot.findByPk(req.params.id);
    await Robot.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(robot);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const robot = await Robot.findByPk(req.params.id);
    res.send(await robot.update(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
