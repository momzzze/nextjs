import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyC6FMwa-c7H4bsPvpvP0ul7Jpj_ImF_C6I",
    authDomain: "dropbox-clone-b76d4.firebaseapp.com",
    projectId: "dropbox-clone-b76d4",
    storageBucket: "dropbox-clone-b76d4.appspot.com",
    messagingSenderId: "1002111160757",
    appId: "1:1002111160757:web:748fbe41737863e07089fc"
};

// check if there is more than once this code with init it once not 5 times.
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage }