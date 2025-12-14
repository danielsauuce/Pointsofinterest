export default class UserDao {
  constructor(db) {
    this.db = db;
  }

  findUserByUsername(username) {
    const query = this.db.prepare('SELECT * FROM poi_users WHERE username = ?');
    return query.get(username);
  }

  registerUser(username, password) {
    const query = this.db.prepare(
      'INSERT INTO poi_users (username, password) VALUES (?, ?)'
    );
    return query.run(username, password);
  }
}
