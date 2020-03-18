import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Alert, Keyboard, Button as NativeButton} from 'react-native';
import { Button } from 'react-native-elements';



class Signup extends Component {

    constructor(props){
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            password: ''
        }
    }


render() {

    const signup = user => {
        const obj = {
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            password: password.username
        }
        return fetch('http://172.20.10.3:4000/register', {
            method: 'post',
            body: JSON.stringify(obj)
          }).then(response => {
            return response.json();
          }).catch(err => {
              console.log(err)
          });
    
    }

    const handleChange = (key, val) => {
        this.setState({ [key]: val});
     }
  
    const handleSubmit = () => {
       
     if(this.state.username.length > 3 && this.state.password.length > 3){

        const userInfo = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            username: this.state.username,
            password: this.state.password
        }

        signup(userInfo).then(res => {
            if (res){
                this.props.navigation.navigate('Login');
            }
            if(res === "This account already exists!"){
                Alert.alert(res, 
                            'Please enter a new username', 
                            [ {text: 'Understood'} ]);
                }
        })
   
     } else{
        Alert.alert('Sorry, Unacceptable!', 
                    'Username and password must at least 4 characters long', 
                    [ {text: 'Understood'} ]);
     }
        
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
    });


    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss(); }}>
              <View style={styles.container}>
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
                        secureTextEntry={true}
                    />
                    <Button
                        title='Sign Up'
                        style={styles.button}
                        onPress={handleSubmit}
                    />
                    <NativeButton 
                        title='I already have an account'
                        onPress={() => this.props.navigation.navigate('Login')}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
  }
}

export default Signup;






// import React, { useReducer } from 'react';
// import { StyleSheet, Text, View, TextInput,  TouchableWithoutFeedback, Keyboard, Button as NativeButton} from 'react-native';
// import { Button } from 'react-native-elements';


// export default function Signup(props) {

//     const [userInput, setUserInput] = useReducer(
//         (state, newState) => ({...state}, {...newState}), 
//         {
//          username: '',
//          password:'',
//          firstname: '',
//          lastname:''
//         }
//     );


//    const handleChange = (key, val) => {
//       setUserInput({ [key]: val});
//    }

//    const signUp = () => {
       
//    }

//     return (
//         <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss(); }}>
//              <View style={styles.container}>
//                 <View style={styles.content}>
//                     <Text style={styles.label}>First Name</Text>
//                     <TextInput 
//                         style={styles.input}
//                         placeholder='Type in your first name'
//                         onChangeText={(val) => handleChange('firstname', val)}
//                     />
//                     <Text style={styles.label}>Last Name</Text>
//                     <TextInput 
//                         style={styles.input}
//                         placeholder='Type in your last name'
//                         onChangeText={(val) => handleChange('lastname', val)}
//                     />
//                     <Text style={styles.label}>Username</Text>
//                     <TextInput 
//                         style={styles.input}
//                         placeholder='Type in your new username'
//                         onChangeText={(val) => handleChange('username', val)}
//                     />
//                     <Text style={styles.label}>Password</Text>
//                     <TextInput 
//                         style={styles.input}
//                         placeholder='Type in your password'
//                         onChangeText={(val) => handleChange('password', val)}
//                     />
//                     <Button
//                         title='Sign Up'
//                         style={styles.button}
//                         onPress={signUp}
//                     />
//                     <NativeButton 
//                         title='I already have an account'
//                         onPress={() => props.navigation.navigate('Login')}
//                     />
//                 </View>
//             </View>
//         </TouchableWithoutFeedback>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'whitesmoke'
//     },
//     content: {
//         flex: 1,
//         marginTop: 30,
//     },
//     title: {
//         paddingTop: 8,
//         fontWeight: 'bold',
//         color: 'white',
//         fontSize: 30,
//         textAlign: 'center'
//     }, 
//     input: {
//         marginLeft: 30,
//         marginBottom: 5,
//         width: 320,
//         height: 45,
//         padding: 3,
//         borderStyle: 'solid',
//         borderColor: 'black',
//         borderBottomWidth: 1,
//         fontSize: 16,
//         fontWeight: '400',
//     },
//     label: {
//         marginLeft: 30,
//         fontSize: 20,
//         fontWeight:'500',
//         marginTop: 20
//     },
//     button: {
//         width: 330,
//         marginLeft: 25,
//         marginTop: 35,
//         marginBottom: 20 
//     }
// })
