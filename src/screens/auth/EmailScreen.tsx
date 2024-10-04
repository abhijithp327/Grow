import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView'
import BackButton from '../../components/global/BackButton'
import CenteredLogo from '../../components/global/CenteredLogo'
import CustomInput from '../../components/inputs/CustomInput'
import CustomButton from '../../components/global/CustomButton'
import { validateEmail } from '../../utils/ValidationUtils'
import { navigate } from '../../utils/NavigationUtil'

const EmailScreen: React.FC = () => {

    const [loading, setLoading] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState('');

    const validate = () => {
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
            return false;
        }

        return true;
    }

    const handleSubmit = async () => {
        setLoading(true);
        setTimeout(() => {
            if (validate()) {
                navigate("EmailOtpScreen", {
                    email: email
                });
            }
            setLoading(false);
        }, 2000);
    }

    return (
        <CustomSafeAreaView>
            <BackButton path="LoginScreen" />
            <ScrollView>
                <CenteredLogo />
                <CustomInput
                    label="EMAIL ADDRESS"
                    returnKeyType="done"
                    value={email}
                    inputMode="email"
                    focusable={true}
                    autoFocus={true}
                    error={emailError}
                    onEndEditing={() => validate()}
                    onChangeText={(text) => {
                        setEmail(text);
                        setEmailError('');
                    }}
                    placeholder="Eg: me@gmail.com"
                    onSubmitEditing={handleSubmit}
                />
            </ScrollView>
            <View>
                <CustomButton
                    text="NEXT"
                    loading={loading}
                    disabled={!validateEmail(email) || loading}
                    onPress={() => handleSubmit()}
                />
            </View>
        </CustomSafeAreaView>

    )
}

const styles = StyleSheet.create({


})

export default EmailScreen