const fs = require("fs");
const { Pop, Rock } = require("./Song");

class Playlist {
  constructor(id, name, songs) {
    this.id = id;
    this.name = name;
    this.songs = songs || [];
  }
  static getPlaylist() {
    let data = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    let playlists = data.map((playlist) => {
      let { id, name, songs } = playlist;
      songs = songs.map((song) => {
        let { id, name, duration, genre } = song;
        if (genre === "Pop") {
          return new Pop(id, name, duration);
        } else if (genre === "Rock") {
          return new Rock(id, name, duration);
        }
      });
      return new Playlist(id, name, songs);
    });
    return playlists;
  }

  static add(params) {
    let playlists = this.getPlaylist();
    const [name, genre, duration, playlistName] = params;
    playlists.forEach((playlist) => {
      if ([playlist.name == playlistName]) {
        let id = playlist.songs[playlist.songs.length - 1].id + 1;
        if (genre === "Pop") {
          playlist.songs.push(new Pop(id, name, +duration));
        } else if (genre === "Rock") {
          playlist.songs.push(new Rock(name, id, +duration));
        }
      }
    });
    // console.log(playlists[0].songs);
    this.save(playlists);
    console.log(`${name} has been added to ${playlistName}.`);
  }

  static show() {
    let data = this.getPlaylist();
    console.log(data);
  }

  static save(data) {
    fs.writeFileSync("./data.json", JSON.stringify(data, null, 3));
  }
}

module.exports = Playlist;
