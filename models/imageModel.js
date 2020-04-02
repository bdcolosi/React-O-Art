const db = require("./conn");

class ArtImageModel {
  constructor(id, artist, worksimg, title, description, medium, size, year) {
    this.id = id;
    this.artist = artist;
    this.worksimg = worksimg;
    this.title = title;
    this.description = description;
    this.medium = medium;
    this.size = size;
    this.year = year;
  }

  static async getAllInfo() {
    try {
      const response = await db.any(`SELECT * FROM works`);
      return response;
    } catch (error) {
      console.log("Error", error);
      return error;
    }
  }

  static async getWorksById(worksimg) {
    try {
      const response = await db.any(
        `SELECT * FROM works WHERE id = ${worksimg}`
      );
      return response;
    } catch (error) {
      console.error("error", error);
      return error;
    }
  }
}

module.exports = ArtImageModel;
