import app from "../firebase";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);

const provider =
  new GoogleAuthProvider();

export const googleLogin =
  () =>
    signInWithPopup(
      auth,
      provider
    );

export const logout =
  () =>
    signOut(auth);

export { auth };