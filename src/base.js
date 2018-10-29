import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDEmOObqn8FiHtb8N9F8deDvD8iatANc48",
    authDomain: "wes-boss-catch-of-the-day.firebaseapp.com",
    databaseURL: "https://wes-boss-catch-of-the-day.firebaseio.com"
};

const firebaseApp = firebase.initializeApp(config);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

