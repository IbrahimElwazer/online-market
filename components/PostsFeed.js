import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import Post from './Post';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { Button } from 'react-native-elements';


export default class PostsFeed extends Component {

    constructor(props){
        super(props);

        this.state = {
           posts: [],
           isLoggedIn: false
        }
    }

    componentDidMount(){

        AsyncStorage.getItem('id_token').then(token => {
            if(token){
                this.setState({isLoggedIn: true})
            }
        });

        try {
          return fetch('http://172.20.10.3:4000/posts')
          .then((response) => response.json())
          .then((data) => {
  
            this.setState({
                posts: [...data],
                searchTerm: ''
            });
  
              
          });
  
        } catch(error) {
            console.log(error)
        }
      };


      async logout(){
          try{
              await AsyncStorage.removeItem('id_token').then(() => this.props.navigation.navigate('Login'))

          } catch(error){
              console.log(error)
          }
      }

  

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

        const handleChange = (val) => {
            this.setState({
                searchTerm: val
            })
        }

        const deletePost = (id) => {

            AsyncStorage.getItem('id_token').then(token => {

                return fetch(`http://172.20.10.3:4000/posts/${id}`, {
                    method: 'delete',
                    headers: {
                        'Authentication': 'Bearer' + token
                      },
                    body: JSON.stringify(obj)
                  }).then(response => {
                     console.log(response)
                  }).catch(err => {
                      console.log(err)
                  });
            });
        }


        const KEYS_TO_FILTERS = ['category', 'postDate', 'city', 'country'];

        const filteredPosts = this.state.posts.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

        const isLoggedIn = this.state.isLoggedIn;

    if(isLoggedIn){

            return (
                <View style={styles.container}>
                        <SearchInput 
                            style={styles.input}
                            placeholder='Filter posts by country, city, category, date..'
                            onChangeText={(val) => handleChange(val)}
                        />
                   
                        <Button
                            title='Logout'
                            style={styles.button}
                            onPress={this.logout}
                        />
                        <Button
                            title='Add Post'
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('newPost')}
                        />
                        
                        <ScrollView>
                                {
                                    filteredPosts.map(post => {

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
                                                    deletePost={() => deletePost(post.id)}
                                                />   
                                        )
                                    })
                                }
                        </ScrollView>
                </View>            
            );
        } else {
            
            return (
                <View style={styles.container}>
                        <SearchInput 
                            style={styles.input}
                            placeholder='Filter posts by country, city, category, date..'
                            onChangeText={(val) => handleChange(val)}
                        />
                   
                        <Button
                            title='Login'
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('Login')}
                        />
                        <ScrollView>
                                {
                                    filteredPosts.map(post => {

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
            );
        }
       
    }
}
