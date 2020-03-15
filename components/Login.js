import React, { useReducer } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Button as NativeButton} from 'react-native';
import { Button } from 'react-native-elements';


export default function Login(props) {

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state}, {...newState}), 
        {
         username: '',
         password:'',
        }
    );


   const handleChange = (key, val) => {
      setUserInput({ [key]: val});
   }

   const Login = () => {
   }

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss(); }}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Enter your username'
                        onChangeText={(val) => handleChange('username', val)}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Enter your password'
                        onChangeText={(val) => handleChange('password', val)}
                    />
                    <Button
                        title='Login'
                        style={styles.button}
                        onPress={Login}
                    />
                    <NativeButton 
                        title='Create a new account'
                        onPress={() => props.navigation.navigate('Signup')}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke'
    },
    content: {
        flex: 1,
        marginTop: 30,
    },
    title: {
        paddingTop: 8,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    }, 
    input: {
        marginLeft: 30,
        marginBottom: 5,
        width: 320,
        height: 45,
        padding: 3,
        borderStyle: 'solid',
        borderColor: 'black',
        borderBottomWidth: 1,
        fontSize: 16,
        fontWeight: '400',
    },
    label: {
        marginLeft: 30,
        fontSize: 20,
        fontWeight:'500',
        marginTop: 20
    },
    button: {
        width: 330,
        marginLeft: 25,
        marginTop: 35,
        marginBottom: 20 
    }
})
