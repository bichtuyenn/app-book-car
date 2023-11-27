import React,{useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation , useFocusEffect} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';

  const Messages = ({ navigation }) => {
      const [isChatSelected, setIsChatSelected] = useState(true);
      const [isNotificationSelected, setIsNotificationSelected] = useState(false);
      const [day, setDay] = React.useState(new Date().toDateString());
      const [number, setNumber] = React.useState('0');
      const [text,  setText] = React.useState('');
      const [expenses, setExpenses] =useState([]);

      const handleSubmit = () => {
        if ((number.trim() === '') || (text.trim() === '')) {
          return;
        }
        const newExpense = { number, text, day }; // Create an object with the correct structure
        setExpenses([...expenses, newExpense]); // Add the new expense object to the array
        setNumber('0');
        setText('');
        navigation.navigate('Home', { expenses: [...expenses, newExpense] });
      }
      

      const nav = useNavigation();
      useFocusEffect(() => {
        setIsChatSelected(true);
        setIsNotificationSelected(false);
      });

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
           <TouchableOpacity
            style={[
              styles.button,
              isChatSelected ? styles.selectedButton : {},
            ]}
            onPress={() => {
              setIsChatSelected(true);
              setIsNotificationSelected(false);
            }}
          >
            <Text style={[styles.buttonText, isChatSelected ? styles.selectedText : {}]}>Chi tiêu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              isNotificationSelected ? styles.selectedButton : {},
            ]}
            onPress={() => {
              setIsChatSelected(false);
              setIsNotificationSelected(true);
              navigation.navigate('Notification');
            }}
          >
            <Text style={[styles.buttonText, isNotificationSelected ? styles.selectedText : {}]}>Thu nhập</Text>
          </TouchableOpacity>
        </View>
        {isChatSelected ? (
        <View style= {styles.addContainer} >
            <View style = {styles.expense}>
                <Text style={styles.text}>Tiền chi</Text>
                <TextInput
                    placeholder='000'
                    value={number}
                    style={styles.input}
                    onChangeText={(number) => setNumber(number)}
                    keyboardType='numeric'
                />
            </View>
            <View style={styles.expense}>
                <Text style={styles.text}>Ngày</Text>
                <Text style= {styles.dateTimeNow & styles.input} >{day}</Text>
            </View>
            <View style={styles.expense}>
                <Text style={styles.text}>Ghi chú</Text>
                <TextInput
                      placeholder='Typing note'
                      value={text}
                      onChangeText={(text) => setText(text)}
                      style= {styles.input}
                />
            </View>
        </View>
        ) : null}
          <Button 
              labelStyle={{ color: '#ffffff' }}
              style= {styles.buttonAdd}
              onPress={handleSubmit}
              >Nhập khoản chi</Button>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginLeft: 16,
      marginTop: 50,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      marginVertical: 10,
    },
    button: {
      flex: 1,
      borderRadius: 10,
      padding: 10,
      marginRight: 10,
      marginTop: 20,
    },
    selectedButton: {
      backgroundColor: '#007ACC',
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 18,
    },
    selectedText: {
      color: 'white',
    },
    chatItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    textContainer: {
      marginLeft: 16,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    lastMessage: {
      fontSize: 16,

    },
    addContainer: {
        flex:1,
        backgroundColor:"#B4B4B3"
    },
    icon:{
        borderRadius: 20,
        backgroundColor: '#F3B664',
        padding: 5
    },
    dateTimeNow:{
        padding: 7,
        backgroundColor: '#B4B4B3',
        borderRadius: 10,
    },
    addContainer: {
        padding: 10,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#ffffff'
    },
    expense: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    text:{
      marginRight: 10,
    },
    input:{
      textAlign: 'center'
    },
    buttonAdd:{
      backgroundColor: '#00A9FF',
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      padding: 2,
      borderRadius: 15,
    }
  
  });
  
  export default Messages;
