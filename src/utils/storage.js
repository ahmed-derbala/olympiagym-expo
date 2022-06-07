import AsyncStorage from '@react-native-async-storage/async-storage';
import { errorHandler } from './error';



exports.storeLocalData = async (params) => {
    console.log(params,'params storeLocalData');
    return AsyncStorage.setItem(params.key, JSON.stringify(params.value))
        .catch(err => errorHandler(err))
}

exports.readLocalData = async (params) => {
    //console.log(params,'params readLocalData');

    const value = await AsyncStorage.getItem(params.key)
        .catch(err => errorHandler(err))

        console.log(value,'value readLocalData');
    return value != null ? JSON.parse(value) : null;
}