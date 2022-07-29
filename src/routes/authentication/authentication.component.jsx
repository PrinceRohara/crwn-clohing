// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// import {
//   auth,
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
//   signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.components";
import SignInForm from "../../components/sign-in-form/sign-in-form.components";

import "./authentication.styles.scss";

const Authentication = () => {
  // useEffect(() => {
  //   async function googleRedirect() {
  //     const response = await getRedirectResult(auth);

  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   googleRedirect();
  // }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   await createUserDocumentFromAuth(user);
  // };

  return (
    <div className="authentication-container">
      {/* <h1>Sign In Page</h1> */}
      {/* <button onClick={logGoogleUser}>Sign in with google popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
