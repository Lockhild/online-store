import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyD4albgop82slXfzMP45B3UAEOH3MiiZI4',
    authDomain: 'online-shop-react2020.firebaseapp.com',
    databaseURL: 'https://online-shop-react2020.firebaseio.com',
    projectId: 'online-shop-react2020',
    storageBucket: 'online-shop-react2020.appspot.com',
    messagingSenderId: '920187182771',
    appId: '1:920187182771:web:1d628b47f50d9f919b5ac6',
    measurementId: 'G-817VLT679J'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
