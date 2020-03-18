import React, { useReducer, useState, Component } from 'react';
import { AsyncStorage, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Alert, Keyboard, Button as NativeButton} from 'react-native';
import { Button } from 'react-native-elements';



class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    async saveItem(item, selectedValue){

        try{
            await AsyncStorage.setItem(item, selectedValue)
        } catch(error){
            console.log(error)
        }
    }


render() {

    
    const login = user => {
        const obj = {
            username: user.username,
            password: user.password
        }
        return fetch('http://172.20.10.3:4000/login', {
            method: 'post',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
          }).then(response => {
                this.saveItem('id_token', response.data)
          }).catch(err => {
              console.log(err)
          });
    }


    const handleChange = (key, val) => {
        this.setState({ [key]: val});
     }
  
    const handleSubmit = () => {
       

        const userInfo = {
            username: this.state.username,
            password: this.state.password
        }

        login(userInfo).then(res => {
            if (res){
                this.props.navigation.navigate('PostsFeed');
            }
            if(res === "Incorrect username entered!"){
                Alert.alert(res, 
                            'Double check if you have typed in your username correctly', 
                            [ {text: 'Understood'} ]);
                }
            if(res === "Incorrect password entered!"){
                Alert.alert(res, 
                    'Double check if you have typed in your  correctly', 
                    [ {text: 'Understood'} ]);            
                }
        })   
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
                        secureTextEntry={true}
                    />
                    <Button
                        title='Login'
                        style={styles.button}
                        onPress={handleSubmit}
                    />
                    <NativeButton 
                        title='Create a new account'
                        onPress={() => this.props.navigation.navigate('Signup')}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
  }
}

export default Login;

