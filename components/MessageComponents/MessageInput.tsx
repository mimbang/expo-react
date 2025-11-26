import React from 'react'
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './style'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const MessageInput = () => {
  return (
    <View style={styles.InputContainer}>
       {/* <KeyboardAvoidingView
      style={{ flex: 1 ,backgroundColor:"#fff"}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // padding pour iOS, height pour Android
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0} // ajuster si tu as un header
    > */}
       <TextInput style={styles.input} placeholder='entrer votre message ici'/>
        {/* <MaterialIcons name='send' style={styles.send} size={30}/> */}
    {/* </KeyboardAvoidingView> */}
     {/* <TextInput style={styles.input} placeholder='entrer votre message ici'/> */}

     <TouchableOpacity>
        <MaterialIcons name='send' style={styles.send} size={30}/>

     </TouchableOpacity>



      {/* <Text>MessageInput</Text> */}
    </View>
  )
}

export default MessageInput