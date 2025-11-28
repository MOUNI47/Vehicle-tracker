// uploader-node.js
// npm install firebase-admin
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // downloaded from Firebase console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com"
});

const db = admin.database();

function pushPoint(vid, lat, lng, speed=0) {
  const ref = db.ref('vehicles/' + vid);
  const payload = { lat, lng, speed, timestamp: Date.now() };
  return ref.set(payload);
}

// Example: random path
async function simulatePath() {
  let lat = 12.9716, lng = 77.5946;
  for (let i=0;i<50;i++) {
    lat += (Math.random() - 0.5) * 0.002;
    lng += (Math.random() - 0.5) * 0.002;
    await pushPoint('vehicle-node', lat, lng, Math.floor(Math.random()*60));
    console.log('pushed', i);
    await new Promise(r => setTimeout(r, 1500));
  }
}
simulatePath().catch(console.error);
