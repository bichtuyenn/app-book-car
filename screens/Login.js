import { View, Text, Button, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function Login() {
  return (
    <View style= {styles.container}>
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <View style={styles.footer}>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                  <FontAwesome
                      name="user-o"
                      color="#05375a"
                      size={20}
                  />
                  <TextInput
                      placeholder='Your email'
                      style={styles.textInput}
                      autoCapitalize='none'
                  />
                  <Feather
                      name="check-circle"
                      color="green"
                      size={2}
                  />
            </View>
        </View>


    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#00A9FF",
  },
  text_header:{
    fontWeight: 'bold',
    fontSize: 30,
    color:'#fff'
  },
  header:{
    flex:1,
    justifyContent: 'flex-end',
    paddingHorizontal:20,
    paddingBottom:50
  },
  textInput:{
    // flex:1,
    paddingLeft:10,
    color: '#05375a'
  },
  text_footer:{
    color: '#05375a',
    fontSize: 18
  },
  action:{
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  footer:{
    flex:3,
    backgroundColor: '#fff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingHorizontal:20,
    paddingVertical:30,
  }
})