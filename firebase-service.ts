import admin from 'firebase-admin';
import * as firebaseAccountCredentials from './serviceAccountKey.json';

const serviceAccount = firebaseAccountCredentials as admin.ServiceAccount;

const db = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://console.firebase.google.com/project/personal-details-38de1/"
}).firestore();

export default admin;
export {db};