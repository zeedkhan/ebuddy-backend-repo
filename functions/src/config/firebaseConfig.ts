import { getApp, getApps, initializeApp } from 'firebase-admin/app';
import { config } from 'dotenv';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

config();

// Initialize Firebase with your config
const firebaseConfig = {
    apiKey: process.env.APP_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGE_SENDER_ID,
    appId: process.env.APP_ID,
};


// Initialize Firebase
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const fireStore = getFirestore(app)

fireStore.settings({ ignoreUndefinedProperties: true });