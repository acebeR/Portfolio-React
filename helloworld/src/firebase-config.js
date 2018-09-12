const Rebase = require('re-base')
const firebase = require('firebase')


  const FirebaseConfig = {
    apiKey: "AIzaSyDNWxedWsY3k2IDxoMmyFJaOk2xsorJhhY",
    authDomain: "helloword-portifolio.firebaseapp.com",
    databaseURL: "https://helloword-portifolio.firebaseio.com",
    projectId: "helloword-portifolio",
    storageBucket: "helloword-portifolio.appspot.com",
    messagingSenderId: "525168063109"
  };
  

  const app = firebase.initializeApp(FirebaseConfig);
  const config = Rebase.createClass(app.database())

  export const storage = app.storage()
  export const auth = app.auth()
  export default config


