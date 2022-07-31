import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native' 
import { TodoContext } from '../global/global-states'

const Task = ({text, state, index}) => {

    const { todoList, setTodo } = useContext(TodoContext) 
    const [ todoState, setTodoState ] = useState(false)
    
    useEffect(() => { 
        {state == "undone" ? setTodoState(false) : setTodoState(true)}
    }, [state])

    const removeTask = () => {
		let todoListCopy = [...todoList]
		todoListCopy.splice(index, 1); 
		setTodo(todoListCopy);
	}
    
    const completeTask = () => { 
        let todoListCopy = [...todoList]
        if(state == "undone") { 
            todoListCopy[index].state = "done"
        } else {
            todoListCopy[index].state = "undone"
        }
        setTodo(todoListCopy)
    }

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity onPress={() => removeTask()}>
                    <View style={styles.square}></View>
                </TouchableOpacity>
                <Text style={todoState ? {...styles.itemText, ...styles.textDone}: styles.itemText}>{text}</Text>
            </View>
            <TouchableOpacity onPress={() => completeTask()}>
                <View style={todoState ? {...styles.circular, ...styles.done} : styles.circular}></View>
            </TouchableOpacity>
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
        width: 20, 
        height: 20,
        borderColor: '#F96300', 
        borderWidth: 2, 
        borderRadius: 20
    },
    done: {
        backgroundColor: '#F96300',
        opacity: 0.5
    },
    textDone: {
        textDecorationLine: 'line-through',
        opacity: 0.5
    }
})

export default Task