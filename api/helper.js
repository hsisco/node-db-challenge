const db = require("./dbConfig");

function addResource(resource) {
  return db("resources").insert(resource)
  .then(ids => {
    return getResourceById(ids[0])
  })
};

function getResources() {
  return db("resources");
};

function addProject(project) {
  return db("projects").insert(project);
};

function getProjects() {
  return db("projects");
};

function getProjectById(id) {
  return db("projects").where({ id })
}

function addTask(project_id, task) {
  return db("tasks").insert({...task, project_id})
};

function getTasks() {
  return db("tasks")
  .join("projects", "projects.id", "tasks.project_id")
  .select("projects.name", "projects.description", "tasks.description", "tasks.notes", "tasks.completed")
}

module.exports = {
  addResource,
  getResources,
  addProject,
  getProjects,
  getProjectById,
  addTask,
  getTasks
}