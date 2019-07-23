import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


let config = {
    apiKey: "AIzaSyCW9JeHDHx3afvyvCKRxIH2K0z1T3fjwg4",
    authDomain: "fir-practice-eee9e.firebaseapp.com",
    databaseURL: "https://fir-practice-eee9e.firebaseio.com",
    projectId: "fir-practice-eee9e",
    storageBucket: "",
    messagingSenderId: "530855837053",
    appId: "1:530855837053:web:0848ed33a799c199"
}


export default class DBHandler{
    static auth;
    static database;

    static init(){
        firebase.initializeApp(config);
        DBHandler.auth = firebase.auth();
        DBHandler.database=firebase.database();
    }
} 