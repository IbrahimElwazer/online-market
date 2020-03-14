import React, { useReducer } from 'react';
import { StyleSheet, Text, View, TextInput, Button as NativeButton} from 'react-native';
import { Button } from 'react-native-elements';


export default function Signup() {

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state}, {...newState}), 
        {
         username: '',
         password:'',
         firstname: '',
         lastname:''
        }
    );


   const handleChange = (key, val) => {
      setUserInput({ [key]: val});
   }

   const signUp = () => {
   }

    return (
        <>
            <View style={styles.header}>
                    <Text style={styles.title}>Create Your Account</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>First Name</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Type in your first name'
                    onChangeText={(val) => handleChange('firstname', val)}
                />
                 <Text style={styles.label}>Last Name</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Type in your last name'
                    onChangeText={(val) => handleChange('lastname', val)}
                />
                 <Text style={styles.label}>Username</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Type in your new username'
                    onChangeText={(val) => handleChange('username', val)}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Type in your password'
                    onChangeText={(val) => handleChange('password', val)}
                />
                <Button
                    title='Sign Up'
                    style={styles.button}
                    onPress={signUp}
                />
                <NativeButton 
                    title='I already have an account'
                    // onPress={}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 330,
        marginLeft: 25,
        marginTop: 35,
        marginBottom: 20 
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
    header: {
        marginTop: 8,
        height: 90,
        paddingTop: 35,
        backgroundColor: '#1e90ff'
    },
    label: {
        marginLeft: 30,
        fontSize: 20,
        fontWeight:'500',
        marginTop: 20
    }
})
