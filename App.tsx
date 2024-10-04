import React from 'react'
import Navigation from './src/navigation/Navigation'
import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId:
    "1064144479210-6cbrot9kfh5208sg2l8u6qppodpbvck4.apps.googleusercontent.com",
  forceCodeForRefreshToken: true,
  offlineAccess: false,
  iosClientId:
    "YOUR_WEB_CLIENT_ID",
});

const App = () => {
  return (
    <Navigation />
  )
}

export default App