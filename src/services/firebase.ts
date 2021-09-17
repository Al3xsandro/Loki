import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCIwFfyCE2RtJF5vFgWwZfIRlcg_qpaif0",
    authDomain: "myapp-20cdd.firebaseapp.com",
    databaseURL: "https://myapp-20cdd.firebaseio.com",
    projectId: "myapp-20cdd",
    storageBucket: "myapp-20cdd.appspot.com",
    messagingSenderId: "1060210492835",
    appId: "1:1060210492835:web:156bb0bb59f004ff540616"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();