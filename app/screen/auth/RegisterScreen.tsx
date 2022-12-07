import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParams} from '../../../App';
import Toast from 'react-native-toast-message';
const RegisterScreen = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const handleRegister = async () => {
    if (!user) {
      Toast.show({
        type: 'info',
        text1: 'Vui lòng nhập tài khoản',
        visibilityTime: 2000,
      });
      ToastAndroid.show('vui lòng nhập tài khoản', 2000);
      return;
    }
    if (!password) {
      Toast.show({
        type: 'info',
        text1: 'Vui lòng nhập mật khẩu',
        visibilityTime: 2000,
      });
      ToastAndroid.show('vui lòng nhập mật khẩu', 2000);
      return;
    }
    navigation.navigate('OTPScreen', {user, password});
  };
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
        }}>
        <Text>Back</Text>
      </TouchableOpacity>
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
        placeholder="Password"
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={handleRegister}
        children={<Text style={{color: 'white', fontSize: 15}}>Register</Text>}
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
export default RegisterScreen;
