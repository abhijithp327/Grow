import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Alert, Platform } from "react-native";
import {
  appleAuth,
  appleAuthAndroid,
} from "@invertase/react-native-apple-authentication";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import axios from "axios";
// import { OAUTH } from "./API";
// import { token_storage } from "./storage";
// import { setUser } from "./reducers/userSlice";
import { resetAndNavigate } from "../utils/NavigationUtil";
import Toast from "react-native-toast-message";

// const handleSignInSuccess = async (res: any, dispatch: any) => {
//   token_storage.set("app_access_token", res.data.tokens.access_token);
//   token_storage.set("app_refresh_token", res.data.tokens.refresh_token);
//   await dispatch(setUser(res.data.user));
//   const { login_pin_exist, phone_exist, name } = res.data.user;
//   if (!phone_exist) {
//     resetAndNavigate("PhoneScreen");
//   } else if (!name) {
//     resetAndNavigate("PersonalDetailScreen");
//   } else if (!login_pin_exist) {
//     resetAndNavigate("PinScreen");
//   } else {
//     resetAndNavigate("AuthVerificationScreen");
//   }
// };

// const handleSignInError = (error: any) => {
//   console.error("Error:", error);
//   Toast.show({
//     type: "normalToast",
//     props: { msg: "We are facing issues, please try again after sometime" },
//   });
// };

// export const signInWithAppleAndroid = () => async (dispatch: any) => {
//   try {
//     const rawNonce = uuid();
//     const state = uuid();

//     appleAuthAndroid.configure({
//       clientId: "your_service_id_refer_chapter_5",
//       redirectUri: "https://xyz.your.redirect.myapp.com/apple_signin/callback",
//       responseType: appleAuthAndroid.ResponseType.ALL,
//       scope: appleAuthAndroid.Scope.ALL,
//       nonce: rawNonce,
//       state,
//     });

//     const response = await appleAuthAndroid.signIn();
//     const res = await axios.post(OAUTH, {
//       provider: "apple",
//       id_token: response.id_token,
//     });
//     await handleSignInSuccess(res, dispatch);
//   } catch (error) {
//     handleSignInError(error);
//   }
// };

// export const signInWithAppleIos = () => async (dispatch: any) => {
//   try {
//     const appleAuthRequestResponse = await appleAuth.performRequest({
//       requestedOperation: appleAuth.Operation.LOGIN,
//       requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
//     });
//     const credentialState = await appleAuth.getCredentialStateForUser(
//       appleAuthRequestResponse.user
//     );
//     if (credentialState === appleAuth.State.AUTHORIZED) {
//       const appleResponse = appleAuthRequestResponse;
//       const res = await axios.post(OAUTH, {
//         provider: "apple",
//         id_token: appleResponse.identityToken,
//       });
//       await handleSignInSuccess(res, dispatch);
//     } else {
//       throw new Error("There was an error");
//     }
//   } catch (error) {
//     handleSignInError(error);
//   }
// };

// export const signInWithApple = async (dispatch: any) => {
//   if (Platform.OS == "ios") {
//     await dispatch(signInWithAppleIos());
//   } else {
//     await dispatch(signInWithAppleAndroid());
//   }
// };

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.signOut();
    const { idToken } = await GoogleSignin.signIn();
    console.log("idToken", idToken);
    // const res = await axios.post(OAUTH, {
    //   provider: "google",
    //   id_token: idToken,
    // });
    Alert.alert("Token")
    // await handleSignInSuccess(res, dispatch);
  } catch (error) {
    // handleSignInError(error);
    console.log(error);
  }
};
