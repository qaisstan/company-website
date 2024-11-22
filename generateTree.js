const dirTree = require("directory-tree");
const fs = require("fs");

const tree = dirTree("./", {
  depth: 4, // Limit to 4 levels
  exclude: /node_modules|public|\.next|\.git/, // Exclude specific folders
});

fs.writeFileSync("directoryTree.json", JSON.stringify(tree, null, 2));
console.log("Directory tree saved to directoryTree.json");
