import React, { Component } from 'react';
import { StyleSheet, Alert, AsyncStorage, Text, View, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Button } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';



export default class PostsFeed extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: '',
            category: '',
            country: '',
            city: '',
            images:[],
            price:'',
            deliveryType: '',
            sellerName: '',
            mobile: ''
        }
    }

  

    render() {

        const editPost = (postInfo, id) => {

            const obj = {
               title: postInfo.title,
               description: postInfo.description,
               category: postInfo.category,
               country: postInfo.country,
               city: postInfo.country,
               images: postInfo.images,
               price: postInfo.price,
               deliveryType: postInfo.deliveryType,
               sellerName: postInfo.sellerName,
               mobile: postInfo.mobile
            }


            AsyncStorage.getItem('id_token').then(token => {

                return fetch(`http://172.20.10.3:4000/posts/${id}`, {
                    method: 'put',
                    headers: {
                        'Authentication': 'Bearer' + token,
                        'Content-Type': 'application/json',
                        'Content-Type': 'multipart/form-data'
                      },
                    body: JSON.stringify(obj)
                  }).then(response => {
                    return response.json();
                  }).catch(err => {
                      console.log(err)
                  });
            });
      

            
        
        }
                
        
        const handleChange = (key, val) => {
            this.setState({ [key]: val});
        }

        const handleSubmit = () => {

            const postInfo = {
                title: this.state.title,
                description:this.state.description,
                category: this.state.category,
                country: this.state.country,
                city: this.state.city,
                images: this.state.images,
                price: this.state.price,
                deliveryType: this.state.deliveryType,
                sellerName: this.state.sellerName,
                mobile: this.state.mobile
            }

        editPost(postInfo).then(post => {
                if(post){
                    this.props.navigation.navigate('PostsFeed');

                    Alert.alert('Post has been modified :)', 
                        'Your post was successfully edited', 
                        [ {text: 'Okay'} ]);
            } else{
                    Alert.alert('Oops! Something went wrong', 
                        'Please try again', 
                        [ {text: 'Okay'} ]);
                }
            });
        }



        const chooseImage = async() => {
            
            let cameraRoll = await ImagePicker.requestCameraRollPermissionsAsync();

            if(cameraRoll.granted === false){

                Alert.alert('Unaccessable!', 
                        'The app could not access your photos', 
                        [ {text: 'Okay'} ]);
            }

            let photosUI = await ImagePicker.launchImageLibraryAsync();

            if(photosUI.cancelled == true){

                Alert.alert('Sorry!', 
                        'The app could not display your photos', 
                        [ {text: 'Okay'} ]);
            } else{
                this.setState({ images: photosUI.uri })
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
                        <Text style={styles.label}>Title of Post</Text>
                        <TextInput 
                            style={styles.input}
                            defaultValue={this.props.title}
                            onChangeText={(val) => handleChange('title', val)}
                        />
                        <Text style={styles.label}>Descirption</Text>
                        <TextInput 
                            style={styles.input}
                            defaultValue={this.props.description}
                            onChangeText={(val) => handleChange('description', val)}
                        />
                        <Text style={styles.label}>Category</Text>
                        <TextInput 
                            style={styles.input}
                            defaultValue={this.props.category}
                            onChangeText={(val) => handleChange('category', val)}
                        />
                        <Text style={styles.label}>Country</Text>
                        <TextInput 
                            style={styles.input}
                            defaultValue={this.props.country}
                            onChangeText={(val) => handleChange('country', val)}
                        />
                        <Text style={styles.label}>City</Text>
                        <TextInput 
                            style={styles.input}
                            defaultValue={this.props.city}
                            onChangeText={(val) => handleChange('city', val)}
                        />
                        <Text style={styles.label}>Images</Text>
                        <Button 
                            style={styles.input}
                            defaultValue={this.props.images}
                            onPress={chooseImage}
                        />
                        <Text style={styles.label}>Price</Text>
                        <TextInput 
                            style={styles.input}
                            defaultValue={this.props.price}
                            onChangeText={(val) => handleChange('price', val)}
                        />
                        <Text style={styles.label}>Delivery Type</Text>
                        <TextInput 
                            style={styles.input}
                            defaultValue={this.props.deliveryType}
                            onChangeText={(val) => handleChange('deliveryType', val)}
                        />
                        <Text style={styles.label}>Your Name</Text>
                        <TextInput 
                            style={styles.input}
                            defaultValue={this.props.sellerName}
                            onChangeText={(val) => handleChange('sellerName', val)}
                        />
                        <Text style={styles.label}>Mobile</Text>
                        <TextInput 
                            style={styles.input}
                            defaultValue={this.props.sellerName}
                            onChangeText={(val) => handleChange('mobile', val)}
                        />
                        <Button
                            title='Submit'
                            style={styles.button}
                            onPress={handleSubmit}
                        />

                    </View>
                </View>
            </TouchableWithoutFeedback>
            
        )
    }
}
