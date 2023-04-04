importScripts(
  "https://www.gstatic.com/firebasejs/9.7.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.7.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyCiYg3QSDBoxw1WcZyOqJvOD15jKiVIDBU",
  authDomain: "capacitor-messaging-demo.firebaseapp.com",
  projectId: "capacitor-messaging-demo",
  storageBucket: "capacitor-messaging-demo.appspot.com",
  messagingSenderId: "153571302575",
  appId: "1:153571302575:web:3dec9634598de1bff0885a"
});
const messaging = firebase.messaging();
