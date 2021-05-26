const admin = require("firebase-admin");
const serviceAccount = require("./thebeaconlira-firebase-adminsdk-25gf9-5b6c539cd8.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
