import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCSPqaqU-TogwU8j8DL38gGJS_aml4_Kr8",
    authDomain: "react-authrntication.firebaseapp.com",
    databaseURL: "https://react-authrntication.firebaseio.com",
    projectId: "react-authrntication",
    storageBucket: "react-authrntication.appspot.com",
    messagingSenderId: "775742464925"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth,
};
