import React, { useState } from 'react';
import {
    ImageBackground, SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    Button,
    Image,
    View,
    Pressable,
    TextInput
} from 'react-native'
const Login = ({ navigation }) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    function handleSubmitPress() {
        const User = {
            username,
            password
        }

    }
    return (
        <sateAreaView>
            <ScrollView style={Styles.ScrollView}>
                <View style={Styles.container}>
                    <Text style={Styles.containerLoginText}>Log In</Text>
                    <Text style={Styles.containerText}>Login to your Account</Text>
                </View>
                <View style={Styles.textInput}>
                    <Text style={Styles.message}></Text>
                    <View style={Styles.sectionStyle}>
                        <TextInput style={Styles.input} placeholder='User name' placeholderTextColor={'rgba(246, 156, 174, 1)'} keyboardType="default"></TextInput>
                        <TextInput style={Styles.input} placeholder='Password' placeholderTextColor={'rgba(246, 156, 174, 1)'} keyboardType="default"></TextInput>
                        <Pressable style={Styles.LoginButton} color="rgba(255, 63, 101, 1)" onPress={handleSubmitPress}>
                            <Text style={Styles.text}>Login</Text>
                        </Pressable>
                        <Text style={Styles.forgetPassword}>Forget Password</Text>
                    </View>
                </View>
            </ScrollView>
        </sateAreaView>
    )
}
const Styles = StyleSheet.create({
    ScrollView: {
        backgroundColor: 'rgba(255, 255, 255, 1)'
    }
})