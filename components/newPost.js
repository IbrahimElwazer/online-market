import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, Text, View, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Button } from 'react-native-elements';



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

        const addPost = postInfo => {

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

            return fetch('http://172.20.10.3:4000/posts', {
                method: 'post',
                headers: {
                    'Authentication': 'Bearer' + token
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

        addPost(postInfo).then(post => {
                if(post){
                    this.props.navigation.navigate('PostsFeed');

                    Alert.alert('Post has been uploaded :)', 
                        'Your post was successfully added to the posts feed', 
                        [ {text: 'Okay'} ]);
            } else{
                    Alert.alert('Oops! Something went wrong', 
                        'Please try again', 
                        [ {text: 'Okay'} ]);
                }
            });
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
                            placeholder='Enter the title of the post'
                            onChangeText={(val) => handleChange('title', val)}
                        />
                        <Text style={styles.label}>Descirption</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Enter a short description of the product'
                            onChangeText={(val) => handleChange('description', val)}
                        />
                        <Text style={styles.label}>Category</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Enter a category for the product'
                            onChangeText={(val) => handleChange('category', val)}
                        />
                        <Text style={styles.label}>Country</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Enter the country which you are in'
                            onChangeText={(val) => handleChange('country', val)}
                        />
                        <Text style={styles.label}>City</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Enter the city which you are in'
                            onChangeText={(val) => handleChange('city', val)}
                        />
                        <Text style={styles.label}>Images</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Choose 4 images at most'
                            onChangeText={(val) => handleChange('images', val)}
                        />
                        <Text style={styles.label}>Price</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Enter the price of the product'
                            onChangeText={(val) => handleChange('price', val)}
                        />
                        <Text style={styles.label}>Delivery Type</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Enter Shipping or Pick up'
                            onChangeText={(val) => handleChange('deliveryType', val)}
                        />
                        <Text style={styles.label}>Your Name</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Enter your full name'
                            onChangeText={(val) => handleChange('sellerName', val)}
                        />
                        <Text style={styles.label}>Mobile</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Enter your mobile number'
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
