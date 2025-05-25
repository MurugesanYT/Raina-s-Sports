
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCqmORDs7fhwaRcvMLvPCO8YZkzHW9YeZE",
  authDomain: "miracle-sports-hub.firebaseapp.com",
  databaseURL: "https://miracle-sports-hub-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "miracle-sports-hub",
  storageBucket: "miracle-sports-hub.firebasestorage.app",
  messagingSenderId: "733573764127",
  appId: "1:733573764127:web:ca54567122497f7d8d712a",
  measurementId: "G-0F4WQ0S0R2"
};

// Error checking for essential configuration
const requiredKeys = ['apiKey', 'projectId', 'databaseURL'];
for (const key of requiredKeys) {
  if (!firebaseConfig[key as keyof typeof firebaseConfig]) {
    console.error(`Firebase configuration error: Missing ${key}`);
  }
}

// Initialize Firebase
let app;
let analytics;
let database;

try {
  app = initializeApp(firebaseConfig);
  database = getDatabase(app);
  
  // Initialize Analytics only if supported (client-side)
  if (typeof window !== 'undefined') {
    isSupported().then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    });
  }
  
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Firebase initialization failed:', error);
}

export { app, analytics, database };
