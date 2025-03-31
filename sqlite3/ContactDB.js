export class ContactDB {
    constructor(conn) {
      this.conn = conn;
    }
  
    create({ firstName, lastName, email }) {
      const stmt = this.conn.prepare(
        `INSERT INTO contacts (first_name, last_name, email) 
         VALUES (?, ?, ?)`
      );
      const { lastInsertRowid } = stmt.run(firstName, lastName, email);
      return { id: lastInsertRowid, firstName, lastName, email };
    }
  }