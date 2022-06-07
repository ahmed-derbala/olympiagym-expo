import { useContext, useState, setState,createContext } from "react";
import styles from "./signin.style";
import { Alert, Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, Pressable, View, SafeAreaView, TouchableOpacity } from "react-native";
import { Button, SocialIcon } from "react-native-elements";
import * as Facebook from "expo-facebook";
const appConfig = require('../config/app.config')
//const appId = "1047121222092614";
const authService = require('./auth.service')
import { AuthContext,Context } from "../utils/context";
import { StatusBar } from "expo-status-bar";
import * as SecureStore from 'expo-secure-store';






export default SigninScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const authContext = useContext(AuthContext);

  const onLoginPress = async () => {
    if (!username.trim()) {
      alert('Please Enter username');
      return;
    }
    if (!password.trim()) {
      alert('Please Enter password');
      return;
    }
    let signinResp = await authService.signin({ username, password })
    //console.log(signinResp.user, 'signinResp.user');
    if (signinResp.code == 500) return alert('Please check credentials');

    storeLocalData({key:'user',value:signinResp.user})
    //authContext.connectedUser({connectedUser:signinResp.user})

    authContext.signin({ userToken: signinResp.token })
  };

  const handleRegister = () => {
    authService.register()
  };

  /*const onFbLoginPress = async () => {
    try {
      await Facebook.initializeAsync({
        appId,
      });
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
      }
    } catch ({ message }) {
      Alert.alert(`Facebook Login Error: ${message}`);
    }
  };*/

  return (
    /* <KeyboardAvoidingView style={styles.containerView} behavior="padding">
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <SafeAreaView style={styles.loginScreenContainer}>
           <View style={styles.loginFormView}>
             <Text style={styles.logoText}>{appConfig.name}</Text>
             <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
             <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
             <Button buttonStyle={styles.loginButton} onPress={() => onLoginPress()} title="Login" />
             <Button buttonStyle={styles.loginButton} onPress={() => handleRegister()} title="Register" />
             <Button        title="goto home"        onPress={() => navigation.push("Home")}
       />
             <Button containerStyle={styles.fbLoginButton} type='clear' onPress={() => onFbLoginPress()} title="Login With Facebook" />
           </View>
         </SafeAreaView>
       </TouchableWithoutFeedback>
     </KeyboardAvoidingView>*/
    <SafeAreaView style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username."
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
          //defaultValue='ahmed4'
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          //defaultValue='123'
          
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={() => onLoginPress()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </SafeAreaView >
  );
}