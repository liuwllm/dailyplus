'use client'

import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { firebaseConfig } from '../firebase.config';

import { useEffect } from 'react';

firebase.initializeApp(firebaseConfig);

interface AuthResult {
  user: firebase.User;
  credential: firebase.auth.AuthCredential;
}

const FirebaseUi = () => {
  useEffect(() => {
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult: AuthResult, redirectUrl) {
          const user = authResult.user;
          const uid = user.uid;

          return true;
        },
        uiShown: function() {
          document.getElementById('loader')!.style.display = 'none';
        }
      },
      signInFlow: 'popup',
      signInSuccessUrl: '/dashboard',
      signInOptions: [{
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        customParameters: {
          // Forces account selection
          prompt: 'select_account' 
        }
      }],
    };
    
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  }, []);

  return (
    <>
      <div id="firebaseui-auth-container"></div>
    </>
  )
}

export default FirebaseUi;