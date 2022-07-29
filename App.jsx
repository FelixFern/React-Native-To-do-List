import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {

	const [ task, setTask ] = useState()
	const [ todoList, setTodo ] = useState([])
	
	const handleTask = () => {
		Keyboard.dismiss()
		setTodo([...todoList, task])
		setTask(null)
	}
	
	const completeTask = (index) => {
		let todoListCopy = [...todoList]
		todoListCopy.splice(index, 1); 
		setTodo(todoListCopy);
	}
	
	
	return (
		<View style={styles.container}>
			<View style={styles.taskWrapper}>
				<Text style={styles.sectionTitle}>Today's Tasks</Text>
				<View style={styles.items}>
					{/* Task List */}
					{todoList.map((val, i) => {
						return (
							<TouchableOpacity onPress={() => {
								completeTask(i)
							}}>
								<Task text={val} key={i}></Task>
							</TouchableOpacity>
						)
					})}
				</View>
			</View>
			{/* Writing task */}
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={styles.writeTaskWrapper}	
			>
				<View style={styles.writeTaskWrapperChild}>
					<TextInput style={styles.input} placeholder={"Write a Task"} value={task} onChangeText={text => setTask(text)}></TextInput>
					<TouchableOpacity onPress={() => {
						handleTask()
					}}>
						<View style={styles.addWrapper}>
							<Text style={styles.addText}>+</Text>
						</View>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F96300',
	},
	taskWrapper: {
		paddingTop: 80, 
		paddingHorizontal: 20
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 10
	},
	items: {
		
	},
	input: {
		
	}, 
	writeTaskWrapper: {
		position:'absolute',
		bottom: 20,
		alignItems: 'center',
		width: '100%'
	},
	writeTaskWrapperChild: {
		width: '90%',
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		alignItems: 'center',
	},	
	input: {
		backgroundColor: '#fff',
		width: '80%',
		paddingVertical: 10,
		paddingHorizontal: 20, 
		borderRadius: 60,
	},	
	addWrapper: {
		width: 50, 
		height: 50,
		backgroundColor: '#fff', 
		borderRadius: 50,
		alignItems: 'center',
		justifyContent:'center'
	},	
	addText: {},	
});
