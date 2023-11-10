import {View, Text , StyleSheet} from 'react-native'
import React from 'react';

const Account = () => {
    return (
        <View style= {styles.container} >
        <Text style={styles.screenText}>
        Account Screen
        </Text>

    </View>
    );
};
const styles = StyleSheet.create ({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    screenText: {
        color:'#000',
    },
})

export default  Account;
