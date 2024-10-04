import { View, Text, SafeAreaView, StyleSheet, Image, Touchable, Alert } from 'react-native'
import React from 'react'
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView'
import CustomText from '../../components/global/CustomText'
import { FONTS } from '../../constants/Fonts'
import { useCustomTheme } from '../../navigation/Theme'
import { normalizeModerately, screenHeight, screenWidth } from '../../utils/Scaling'
import LoginImageDark from "../../assets/images/login_dark_animation.png"
import LoginImageLight from "../../assets/images/login_animation_light.png"
import SocialLoginButton from '../../components/auth/SocialLoginButton'
import GoogleIcon from '../../assets/images/google.png'
import Icon from 'react-native-vector-icons/Ionicons'
import TouchableText from '../../components/auth/TouchableText'
import BottomText from '../../components/auth/BottomText'
import { signInWithGoogle } from '../../redux/SocialLogin'


const LoginScreen: React.FC = () => {

    const theme = useCustomTheme();

    return (
        <CustomSafeAreaView>
            <View style={styles.container}>
                <CustomText variant='h3' fontFamily={FONTS.Medium}>
                    Together we Grow
                </CustomText>
                <CustomText variant='h7' fontFamily={FONTS.Bold} style={styles.subText}>
                    Invest  •  Pay  •  Loans
                </CustomText>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.img}
                        source={theme.dark ? LoginImageDark : LoginImageLight}
                    />
                </View>

                <SocialLoginButton
                    icon={<Image source={GoogleIcon} style={{ width: 20, height: 20 }} />}
                    text='Continue with Google'
                    onPress={() => signInWithGoogle()}
                />

                {/* <SocialLoginButton
                    icon={<Icon name="logo-apple" size={18} color='black' />}
                    text='Continue with Apple'
                    onPress={() => { }}
                /> */}

                <TouchableText
                    firstText="Use other email ID"
                    onPress={() => { }}
                    style={{ marginVertical: 30, marginTop: 20 }}
                />

                <BottomText />

            </View>
        </CustomSafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    subText: {
        marginTop: 16,
        opacity: 0.7
    },
    imgContainer: {
        width: screenWidth,
        height: screenHeight * 0.45,
        marginVertical: normalizeModerately(30)
    },
    img: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    }

});

export default LoginScreen