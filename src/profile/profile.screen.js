import { useContext, useState, setState, React, useEffect } from "react";
import styles from "./profile.style";
import { Alert, Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, Pressable, View, SafeAreaView, TouchableOpacity } from "react-native";
import { Button, SocialIcon } from "react-native-elements";
import * as Facebook from "expo-facebook";
const appConfig = require('../config/app.config')
import { AuthContext } from "../utils/context";
import { StatusBar } from "expo-status-bar";
import * as SecureStore from 'expo-secure-store';








export default ProfileScreen = ({ navigation }) => {
   [username,setUsername] =useState('')
   const load = async () => {
      let user = await readLocalData({ key: 'user' })
      console.log(user, 'profile')
      setUsername(user.username)
     // alert(user)
   }

   useEffect(() => {
      load(), []
   })


   return (<Text>hello {username}</Text>)
}