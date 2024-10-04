import React from 'react'
import Navigation from './src/navigation/Navigation'
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

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
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App