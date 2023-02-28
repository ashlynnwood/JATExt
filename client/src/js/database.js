import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  // Create connection to db and version 
  const jateDb = await openDB('jate', 1);
  // Create transaction and specify db and data privileges
  const tx = jateDb.transaction('jate', 'readwrite');
  // Open up object store
  const store = tx.objectStore('jate');
  // Add content to db
  const request = store.put({ id: id, jate: content });
  // Confirmation of request
  const result = await request;
  console.log('🚀 - data saved to the database', result);
  console.error('putDb not implemented');
}

// Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');

  // Create connection to db and version 
  const jateDb = await openDB('jate', 1);

  // Create transaction and specify db and data privileges
  const tx = jateDb.transaction('jate', 'readonly');

  // Open up object store
  const store = tx.objectStore('jate');

  // Get all data 
  const request = store.getAll();

  // Get confirmation of the request
  const result = await request;
  console.log('result.value', result);
  console.error('getDb not implemented');
  return result;

};

initdb();
