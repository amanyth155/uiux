const dbName = "UIUX";
const store_name = "my_app";
const dbVersion = 1;

function openDB() {
  return new Promise((resolve, reject) => {
    const requset = indexedDB.open(dbName, dbVersion);

    requset.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(store_name)) {
        var store = db.createObjectStore(store_name, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };

    requset.onsuccess = () => resolve(requset.result);
    requset.onerror = () => reject("Error Opening DB");
  });
}

// delete one
async function deleteData(userId) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(store_name, "readwrite");
    const store = transaction.objectStore(store_name);
    const request = store.delete(userId);

    request.onsuccess = () => resolve("Data deleted successfully");
    request.onerror = () => reject("Error deleting data");
  });
}
// Delete the user with id: 1
deleteData(1)
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));


//   delete all
  async function deleteAllData() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(store_name, "readwrite");
    const store = transaction.objectStore(store_name);
    const request = store.clear();

    request.onsuccess = () => resolve("All data deleted successfully");
    request.onerror = () => reject("Error deleting all data");
  });
}

deleteAllData()
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));

