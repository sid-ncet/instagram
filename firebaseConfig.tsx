import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyDl1fJvI-1RZGN9j9kC5_JDgJVAy-WFgqQ",
    authDomain: "instagram-b69a3.firebaseapp.com",
    projectId: "instagram-b69a3",
    storageBucket: "instagram-b69a3.appspot.com",
    messagingSenderId: "1077903648923",
    appId: "1:1077903648923:web:b95fb6074dad4b7e4f7e3e",
    measurementId: "G-N1V8HHS046"
  };
  const App=initializeApp(firebaseConfig)
   const auth = initializeAuth(App, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
  
  export default App;