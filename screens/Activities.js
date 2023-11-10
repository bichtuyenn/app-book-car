import {View, Text , StyleSheet} from 'react-native'
import React from 'react';

const Activities = () => {
    return (
        <View style= {styles.container} >
        <Text style={styles.screenText}>
        Activities Screen
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

export default Activities;
