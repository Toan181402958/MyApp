import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParams} from '../../../App';
const LoginScreen = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const handleLogin = async () => {
    try {
      await auth()
        .signInWithEmailAndPassword(user, password)
        .then(() => {
          console.log('login success');
        });
    } catch (error) {
      console.log('login faild');
    }
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        onChangeText={text => {
          setUser(text);
        }}
        style={styles.input}
        placeholder="User"
      />
      <TextInput
        onChangeText={text => {
          setPassword(text);
        }}
        style={styles.input}
        placeholder="User"
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={handleLogin}
        children={<Text style={{color: 'white', fontSize: 15}}>Login</Text>}
      />
      <TouchableOpacity
        style={{marginTop: 40}}
        onPress={() => {
          navigation.navigate('RegisterScreen');
        }}
        children={<Text>Register</Text>}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  btn: {
    width: '80%',
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
});
export default LoginScreen;
