import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableWithoutFeedback, Keyboard} from 'react-native';
import axios from 'axios';
import Post from './Post';


export default class PostsFeed extends Component {

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
                        <TextInput 
                            style={styles.input}
                            placeholder='Filter posts by country, city, category, date..'
                            onChangeText={(val) => handleChange(val)}
                        />
                        <FlatList
                            data={this.state.posts}
                            renderItem={({ post }) => (
                               <Post 
                                    title={post.title} 
                                    description={post.description}
                                    category={post.category}
                                    country={post.country}
                                    city={post.city}
                                    images={post.images}
                                    price={post.price}
                                    sellerName={post.sellerName}
                                    postDate={post.postDate}
                                    deliveryType={post.deliveryType}
                                    mobile={post.mobile}

                               />
                            )}
                        />

                    </View>
                </View>
            </TouchableWithoutFeedback>
            
        )
    }
}
