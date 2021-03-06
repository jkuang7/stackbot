// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const { Sequelize } = require("sequelize");
const { Op } = require("sequelize");
const db = require("./database");
const Project = require("./project");
const Robot = require("./robot");

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//
// Puppy.belongsTo(Owner)
const RobotProject = db.define("RobotProjects", {}, { timestamps: true });

Project.belongsToMany(Robot, { through: "RobotProjects" });
Robot.belongsToMany(Project, { through: "RobotProjects" });

//Sequelize Magic Methods
// console.log(Object.keys(Robot.prototype));
// console.log(Object.keys(Project.prototype));



module.exports = {
  // Include your models in this exports object as well!
  db,
  Robot,
  Project,
  RobotProject,
};
