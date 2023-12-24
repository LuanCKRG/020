import { auth } from "./index";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const createUser = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signout = async () => {
  return signOut(auth)
    .then((pse) => {
      console.log(pse);
      // Sign-out successful.
    })
    .catch((err) => {
      console.error(err);
    });
};

export const signinGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      console.error(error);
      // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const signinFacebook = async () => {
  const provider = new FacebookAuthProvider();

  await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      console.error(error);
      // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const getUser = () => {
  const user = auth.currentUser;
  console.log(user);
  return { user };
};
