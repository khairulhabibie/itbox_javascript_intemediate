const command = process.argv[2];
const params = process.argv.slice(3);
const PlaylistController = require("./controllers/PlaylistController");

// console.log(command);
// console.log(process.argv.slice(2));
// console.log(params);

switch (command) {
  case "add":
    PlaylistController.add(params);
    break;
  case "remove":
    PlaylistController.remove(params);
    break;
  case "make":
    PlaylistController.make(params);
    break;
  case "ShowPlaylist":
    PlaylistController.show();
    break;
  default:
    console.log("masukkan command yang benar, trims!");
}
