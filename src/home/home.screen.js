import React from "react";
import styles from "./home.style";
import { Alert, Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, Pressable, View } from "react-native";
import { Button, SocialIcon } from "react-native-elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TimelineScreen from '../timeline/timeline.screen.js'
import DisciplinesScreen from '../disciplines/disciplines.screen.js'
import ProfileScreen from '../profile/profile.screen.js'





const appConfig = require('../config/app.config')



const Tabs = createBottomTabNavigator();

export default function HomeScreen() {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Timeline" component={TimelineScreen} />
            <Tabs.Screen name="Disciplines" component={DisciplinesScreen} />
            <Tabs.Screen name="Profile" component={ProfileScreen} />
        </Tabs.Navigator>)
}