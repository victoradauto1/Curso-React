import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyHrHDZ1aqRNRk4Jo0IbUtGRw8vMAjqLM",
  authDomain: "miniblog-bcce7.firebaseapp.com",
  projectId: "miniblog-bcce7",
  storageBucket: "miniblog-bcce7.appspot.com",
  messagingSenderId: "399797415228",
  appId: "1:399797415228:web:ae982ee9558aaf90190239"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db};


