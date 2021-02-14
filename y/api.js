require('dotenv').config()

console.log(process.env);

let firebaseConfig = {
    apiKey: process.APP_API_KEY,
    authDomain: process.APP_AUTH_DOMAIN,
    projectId: process.APP_PROJECT_ID,
    storageBucket: process.APP_STORAGE_BUCKET,
    messagingSenderId: process.APP_MESSAGING_SENDER_ID,
    appId: process.APP_APP_ID,
    measurementId: process.APP_MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

