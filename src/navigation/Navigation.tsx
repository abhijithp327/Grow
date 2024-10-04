import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useCustomTheme } from './Theme';
import { navigationRef } from '../utils/NavigationUtil';
import HomeScreen from '../screens/dashboard/HomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import EmailScreen from '../screens/auth/EmailScreen';
import EmailOtpScreen from '../screens/auth/EmailOtpScreen';
import EmailPasswordScreen from '../screens/auth/EmailPasswordScreen';
import SetPasswordScreen from '../screens/auth/SetPasswordScreen';

const Stack = createNativeStackNavigator();



const Navigation = () => {

    const theme = useCustomTheme();

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: theme.colors.background,
            text: theme.colors.text,
            card: theme.colors.card,
            border: theme.colors.border,
            notification: theme.colors.notification,
            primary: theme.colors.primary,
        },
    };

    return (

        <NavigationContainer ref={navigationRef} theme={MyTheme}>
            <Stack.Navigator
                initialRouteName='BottomTabBar'
                screenOptions={() => ({
                    headerShown: false
                })}
            >
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="EmailScreen" component={EmailScreen} />
                <Stack.Screen name="EmailOtpScreen" component={EmailOtpScreen} />
                <Stack.Screen name="EmailPasswordScreen" component={EmailPasswordScreen} />
                <Stack.Screen name="SetPasswordScreen" component={SetPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigation