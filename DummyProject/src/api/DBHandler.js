import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
let config={
    apiKey: "AIzaSyDFmkyIog1lveprqLnAGv02Z7lPNn8z4AE",
    authDomain: "dummyproject-bd069.firebaseapp.com",
    databaseURL: "https://dummyproject-bd069.firebaseio.com",
    projectId: "dummyproject-bd069",
    storageBucket: "",
    messagingSenderId: "832395133447",
    appId: "1:832395133447:web:f2acdeffb2c2d1f5"
}
export default class DBHandler{
static auth;
static database;
static init(){
    firebase.initializeApp(config);
    DBHandler.auth=firebase.auth;
    DBHandler.database=firebase.database
}
}