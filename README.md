Vehicle Tracking Web App — README

Requirements:
- A Firebase project (free tier)
- Modern browser
- VS Code (optional) + Live Server extension (recommended)
- (Optional) Node.js if you use the uploader-node.js

Steps:

1) Create Firebase project
   - Go to https://console.firebase.google.com/
   - Create new project (e.g., vehicle-tracker-demo)
   - In Project settings -> General -> Add app (Web) -> register.
   - Copy the Firebase config (apiKey, authDomain, databaseURL, etc.). Paste into index.html and simulator.html in firebaseConfig.

2) Enable Realtime Database
   - In Console -> Build -> Realtime Database -> Create database
   - Choose a region and start in "test mode" (or set the rules to the firebase.rules above)
   - Note: The databaseURL will look like https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com

3) Edit firebaseConfig in both files
   - Replace placeholders with your project values.

4) Run locally
   Option A (recommended): Use VS Code Live Server
      - Install Live Server extension.
      - Open project folder, right-click on index.html -> Open with Live Server.
      - Open simulator.html similarly in another tab and start sending sample coordinates.

   Option B: Use simple http server (Python)
      - Python 3: `python -m http.server 5500`
      - Visit: http://localhost:5500/index.html

5) Test
   - Open `index.html` — map will load.
   - Open `simulator.html` — set vehicle id `vehicle1` and click "Start sending".
   - You should see the marker appear and the path drawn in `index.html` in (near) real-time.

6) Optional: Run Node uploader
   - Place `serviceAccountKey.json` (download from Firebase Console -> Project Settings -> Service accounts)
   - `npm install firebase-admin`
   - `node uploader-node.js`
   - This will push points as `vehicle-node`.

Security note:
- For demo keep simple rules; for production require authentication:
  - Only allow writes from authenticated devices or server using admin SDK.
  - Use token-based auth and validate device IDs.

Deliverables for submission:
- index.html, styles.css, simulator.html
- short report with architecture diagram, database schema, sample screenshots
- explanation of how you'd secure and extend the project (e.g., Firebase Auth, storing route history, speed alerts, geofencing, notifications)
