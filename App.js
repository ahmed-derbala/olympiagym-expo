import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./src/auth/signin.screen.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./src/auth/signin.screen";
import HomeScreen from "./src/home/home.screen.js";
import SigninScreen from "./src/auth/signin.screen";
import SignupScreen from "./src/auth/signup.screen";
import { AuthContext } from "./src/utils/context";


/**
 * init global variables
 */
global.errorHandler = require('./src/utils/error')
global.storeLocalData = require('./src/utils/storage').storeLocalData
global.readLocalData = require('./src/utils/storage').readLocalData



const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SigninScreen}
      options={{ title: "Sign In" }}
    />
    <AuthStack.Screen
      name="SignupScreen"
      component={SignupScreen}
      options={{ title: "SignupScreen" }}
    />
  </AuthStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerShown="false">
    {userToken ? (
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false
        }}
      />
    )}
  </RootStack.Navigator>
);


export default function App() {
//export default () => {
 /* return (<NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: "LoginScreen" }}
      />

      <AuthStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
    </AuthStack.Navigator>
  </NavigationContainer>)*/

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  //const [connectedUser, setConnectedUser] = React.useState(true);

  const authContext = React.useMemo(() => {
    return {
      signin: (params) => {
        setIsLoading(false);
        //console.log(params.userToken,'params.userToken');
        setUserToken(params.userToken);
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
     /* connectedUser: (params) => {
        setConnectedUser(params.connectedUser);
      }*/
    };
  }, []);



  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

