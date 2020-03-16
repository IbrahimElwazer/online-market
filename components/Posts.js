import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, FieldList, TouchableWithoutFeedback, Keyboard, Button as NativeButton} from 'react-native';
import { Button } from 'react-native-elements';
import { getPosts } from '../functions/Posts';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';


export default class Posts extends Component {

    constructor(props){
        super(props);

        this.state = {
           posts: []
        }
    }

        componentDidMount(){
            return fetch('http://localhost:4000/posts')
              .then((response) => response.json())
              .then((data) => {

                this.setState({
                    posts: [...data]
                });
        
              }).catch((error) =>{
                console.error(error);
              });

        // axios.get('http://localhost:4000/posts').then(res => {
        //     const posts = res.data;
        //     this.setState({ posts: [...posts] });
        // }).catch(err => {
        //     console.log(err)
        // })

        };

  

    render() {

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
                marginLeft: 20,
                marginBottom: 5,
                width: 340,
                height: 50,
                paddingLeft: 7,
                borderStyle: 'solid',
                borderColor: 'grey',
                borderRadius: 40,
                borderWidth: 1,
                fontSize: 16,
                fontWeight: '400',
            },
            button: {
                width: 330,
                marginLeft: 25,
                marginTop: 15,
                marginBottom: 5 
            }
        });

        return (
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss(); }}>
                <View style={styles.container}>
                    <View style={styles.content}>
                         <NativeButton 
                            title='Login'
                            onPress={() => this.props.navigation.navigate('Login')}
                        />
                        <NativeButton 
                            title='Sign up'
                            onPress={() => this.props.navigation.navigate('Signup')}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder='Filter posts by country, city, category, date..'
                            onChangeText={(val) => handleChange(val)}
                        />
                        <FieldList>

                        </FieldList>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            
        )
    }
}
