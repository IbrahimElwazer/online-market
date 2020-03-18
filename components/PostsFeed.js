import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import Post from './Post';


export default class PostsFeed extends Component {

    constructor(props){
        super(props);

        this.state = {
           posts: []
        }
    }

    componentDidMount(){
        try {
          return fetch('http://172.20.10.3:4000/posts')
          .then((response) => response.json())
          .then((data) => {
  
            this.setState({
                posts: [...data]
            });
  
              
          });
  
        } catch(error) {
            console.log(error)
        }
      };

  

    render() {

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: 'whitesmoke'
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
                marginTop: 25,
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
                        <TextInput 
                            style={styles.input}
                            placeholder='Filter posts by country, city, category, date..'
                            onChangeText={(val) => handleChange(val)}
                        />
                        <ScrollView>
                                {
                                    this.state.posts.map(post => {

                                        return (
                                                <Post 
                                                    key={post.id}
                                                    title={post.title} 
                                                    description={post.description} 
                                                    category= {post.category}
                                                    country={post.country}
                                                    city={post.city}
                                                    images={post.images}
                                                    price={post.price}
                                                    postDate={post.postDate}
                                                    deliveryType={post.deliveryType}
                                                    sellerName={post.sellerName}
                                                    mobile={post.mobile}
                                                />   
                                        )
                                    })
                                }
                        </ScrollView>
                </View>
            </TouchableWithoutFeedback>
            
        )
    }
}
