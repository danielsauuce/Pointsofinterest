import bcrypt from 'bcrypt';

export default class UserController {
  constructor(db) {
    this.db = db;
  }

  async register(req, res) {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({ error: 'All fields must be filled' });
      }

      const checkpoi_user = this.db.prepare(
        'SELECT * FROM poi_users WHERE username = ?'
      );
      const checkifexisted = checkpoi_user.get(username);

      if (checkifexisted) {
        return res.status(400).json({ error: 'Username already existed' });
      }

      const encPass = await bcrypt.hash(password, 10);

      const query = this.db.prepare(
        'INSERT INTO poi_users (username, password) VALUES (?, ?)'
      );
      const results = query.run(username, encPass);

      if (results.changes === 1) {
        return res.status(200).json({ success: 'Registered Successfully' });
      } else {
        return res.status(400).json({ error: 'Unable to Register' });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({ error: 'All fields must be filled!' });
      }

      const checkuser = this.db.prepare(
        'SELECT username, password FROM poi_users WHERE username = ?'
      );
      const ifuserexist = checkuser.get(username);

      if (!ifuserexist) {
        return res
          .status(400)
          .json({ error: 'Username or Password not found, Please register!' });
      }

      const match = await bcrypt.compare(password, ifuserexist.password);

      if (!match) {
        return res.status(401).json({ error: 'Incorrect password' });
      }

      req.session.username = username;

      return res.status(200).json({ message: 'Logged in successfully.' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  getSession(req, res) {
    try {
      return res.json({ username: req.session.username || null });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  logout(req, res) {
    try {
      req.session = null;
      return res.json({ success: 'Logged out' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
