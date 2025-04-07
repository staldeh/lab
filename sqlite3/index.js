import { DB } from './DB.js';
import { ContactDB } from './ContactDB.js';

// open a database connection
const db = new DB('test.db');

const contactDB = new ContactDB(db.conn);
/* const contact = contactDB.create({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane.doe@example.com',
}); */
const contact = contactDB.findById(1002);
console.log(contact);

// close the database
db.close();