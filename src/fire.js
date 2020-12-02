import firebase from 'firebase'

// replace this with your credentials
const firebaseConfig = {
    apiKey: "AIzaSyA70mQ5UlTpwWyv7vQV-SHCIZYZ00HM4kw",
    authDomain: "todo-app-d87b8.firebaseapp.com",
    databaseURL: "https://todo-app-d87b8.firebaseio.com",
    projectId: "todo-app-d87b8",
    storageBucket: "todo-app-d87b8.appspot.com",
    messagingSenderId: "334384180440",
    appId: "1:334384180440:web:01f19fadbba4253c797bad",
    measurementId: "G-D1K39DQFGM"
};
// ----------------------------------------//

const fire = firebase.initializeApp(firebaseConfig);
export default fire;