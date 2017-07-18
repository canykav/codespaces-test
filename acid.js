events.push = function(e) {
  console.log("===> Building " + project.repo.cloneURL + " " + e.commit);

  var node = new Job("node-runner")
  node.image = "node:8"
  node.tasks = [
    "cd /src/hello",
    "npm install",
    "node index.js"
  ]
  nod.env = {
    "unused": "myval",
    "unused2": project.secrets.dbPassword || "empty"
  }
  node.run()
}

events.imagePush = function(e) {
  console.log(JSON.stringify(e))
  var hook = e.payload
  console.log("===> Image push " + hook.repository.name + ":" + hook.push_data.tag)
}
