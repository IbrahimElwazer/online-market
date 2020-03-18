import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
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
            content: {
                paddingHorizontal: 20,
                width: 330,
                marginTop: 24,
                marginLeft: 22,
                borderStyle: 'solid',
                borderColor: 'grey',
                borderRadius: 40,
                padding: 20,
                backgroundColor:'lightblue'
            },
            title: {
                fontSize: 16,
                fontWeight: '500',
                padding: 3
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
            },
            modifyButton:{
                width: 280,
                margin: 10
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
                                            <View key={post.ID} style={styles.content}>
                                                <Text style={styles.title}>Title: {post.title}</Text>
                                                <Text style={styles.title}>Description: {post.description}</Text>
                                                <Text style={styles.title}>Category: {post.category}</Text>
                                                <Text style={styles.title}>Country: {post.country}</Text>
                                                <Text style={styles.title}>City: {post.city}</Text>
                                                {/* <Image style={{width:30, height: 30}} source={{uri: post.images}}></Image> */}
                                                <Text style={styles.title}>Price: {post.price}</Text>
                                                <Text style={styles.title}>Date of Post: {post.postDate}</Text>
                                                <Text style={styles.title}>Delivery Type: {post.deliveryType}</Text>
                                                <Text style={styles.title}>Name of Seller: {post.sellerName}</Text>
                                                <Text style={styles.title}>Mobile Number: {post.mobile}</Text>
                                                <Button
                                                    title='Modify'
                                                    style={styles.modifyButton}
                                                    onPress={() => this.props.navigation.navigate('editPost', 
                                                    {
                                                        ID: post.ID,
                                                        title: post.title,
                                                        description: post.description,
                                                        category: post.category,
                                                        country: post.country,
                                                        city: post.city,
                                                        images: post.images,
                                                        price: post.price,
                                                        deliveryType: post.deliveryType,
                                                        sellerName: post.sellerName,
                                                        mobile: post.mobile
                                                    })}
                                                />
                                                 <Button
                                                    title='Delete'
                                                    style={styles.button}
                                                    onPress={() => deletePost(post.ID)}
                                                />
                                            
                                            </View>
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
                                            <View key={post.ID} style={styles.content}>
                                                <Text style={styles.title}>Title: {post.title}</Text>
                                                <Text style={styles.title}>Description: {post.description}</Text>
                                                <Text style={styles.title}>Category: {post.category}</Text>
                                                <Text style={styles.title}>Country: {post.country}</Text>
                                                <Text style={styles.title}>City: {post.city}</Text>
                                                {/* <Image style={{width:30, height: 30}} source={{uri: post.images}}></Image> */}
                                                <Text style={styles.title}>Price: {post.price}</Text>
                                                <Text style={styles.title}>Date of Post: {post.postDate}</Text>
                                                <Text style={styles.title}>Delivery Type: {post.deliveryType}</Text>
                                                <Text style={styles.title}>Name of Seller: {post.sellerName}</Text>
                                                <Text style={styles.title}>Mobile Number: {post.mobile}</Text>
                                               
                                            </View>
                                 
                                        )
                                    })
                                }
                        </ScrollView>
                </View>            
            );
        }
       
    }
}
