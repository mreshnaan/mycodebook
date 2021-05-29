var admin = require("firebase-admin");


var serviceAccount = require("./mycodebook-ed1a9-firebase-adminsdk-tzuy6-914ffa21b4.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



