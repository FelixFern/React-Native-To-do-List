import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native' 

const Task = ({text}) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemLeft: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    square: {
        width: 24, 
        height: 24, 
        backgroundColor: '#F96300', 
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%', 
    },
    circular: {
        width: 12, 
        height: 12,
        borderColor: '#F96300', 
        borderWidth: 2, 
        borderRadius: 3
    },
})

export default Task