import firestore from '@react-native-firebase/firestore'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const Demo = () => {
  const handleSend = async () => {
    const value = await firestore().collection('User').doc('userId1').onSnapshot(snap => {
      console.log('snap', snap)
    })
    console.log('value', value)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleSend}
      >
        <Text>Send</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
export default Demo