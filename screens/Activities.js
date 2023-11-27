import {View, Text , StyleSheet,TextInput} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Ionicons';

const Activities = () => {
    const [number, onChangeNumber] = React.useState('');
    const [text,  onChangeText] = React.useState('');

    return (
        <View style= {styles.container} >
            <View style = {styles.header}>
                <Feather 
                    name="restaurant-outline"
                    color="white"
                    size={24}
                    style = {styles.icon}
                />
                <TextInput
                    placeholder='0'
                    value={number}
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    keyboardType='numeric'
                />
            </View>
            <View style={styles.expenseContainer}>
                <View style={styles.expense}>
                    <View style={{flexDirection:'row'}}>
                        <Feather 
                            name="calendar-outline"
                            color="gray"
                            size={22}
                            style = {styles.iconExpense}
                        />
                        <Text style={{marginLeft: 10}}>Ngày tháng</Text>
                    </View>
                    <Text style= {styles.dateTimeNow}>{new Date().toDateString()}</Text>
                </View>
                <View style={styles.expense}>
                    <View style={{flexDirection:'row'}}>
                        <Feather 
                            name="today-outline"
                            color="gray"
                            size={22}
                            style = {styles.iconExpense}
                        />
                        <Text style={{marginLeft: 10}}>Ghi chú</Text>
                        <TextInput
                            placeholder='Typing note'
                            value={text}
                            onChangeText={onChangeText}
                            style= {styles.textInput}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor:"#B4B4B3"
    },
    header:{
        backgroundColor: '#00A9FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeftRight: 30,
        padding: 20,
    },
    input:{
        
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
    expenseContainer: {
        flexDirection: 'column',
        justifyContent:'flex-end',
        padding: 10,
        borderRadius: 10,
        margin: 10,
        backgroundColor: '#ffffff'
    },
    expense: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginLeftRight: 20,
        alignItems: 'center',
        marginBottom: 5,
    },
    iconExpense:{
        
    },
    textInput:{
       
    },
    

})

export default Activities;

