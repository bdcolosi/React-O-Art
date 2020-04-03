const db = require("./conn");

class CommentsModel {
  constructor(id, user_id, img_id, comment) {
    this.id = id;
    this.user_id = user_id;
    this.img_id = img_id;
    this.comment = comment;
  }

  static async getAllComments() {
    try {
      const response = await db.any(`SELECT * FROM comments;`);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getCommentsByImageID(img_id) {
    try {
      const response = await db.any(
        `SELECT * FROM comments WHERE img_id = ${img_id};`
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }

  async addComment(user_id, img_id, comment) {
    try {
      const response = await db.one(
        `INSERT INTO comments (user_id, img_id, comment) VALUES ($1, $2, $3) RETURNING id`,
        [this.user_id, this.img_id, this.comment]
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = CommentsModel;
