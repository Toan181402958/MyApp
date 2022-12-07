import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RootStackParams } from '../../../App';
const HomeScreen = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParams>>();
    const handleLogin = () => {

    }
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20
    },
    btn: {
        width: '80%',
        backgroundColor: 'blue',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40
    }
})
export default HomeScreen