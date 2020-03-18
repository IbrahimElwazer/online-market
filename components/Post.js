import React, {Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';


class Post extends Component {

    constructor(props){
        super(props);

    }


render() {

    const styles = StyleSheet.create({
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
        }
    });


    return (
     
             <View style={styles.content}>
                 <Text style={styles.title}>Title: {this.props.title}</Text>
                 <Text style={styles.title}>Description: {this.props.description}</Text>
                 <Text style={styles.title}>Category: {this.props.category}</Text>
                 <Text style={styles.title}>Country: {this.props.country}</Text>
                 <Text style={styles.title}>City: {this.props.city}</Text>
                 <Image style={{width:30, height: 30}} source={require(this.props.images.toString())}></Image>
                 <Text style={styles.title}>Price: {this.props.price}</Text>
                 <Text style={styles.title}>Date of Post: {this.props.postDate}</Text>
                 <Text style={styles.title}>Delivery Type: {this.props.deliveryType}</Text>
                 <Text style={styles.title}>Name of Seller: {this.props.sellerName}</Text>
                 <Text style={styles.title}>Mobile Number: {this.props.mobile}</Text>
                 <Button
                    title='Modify'
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('newPost')}
                />
                <Button
                    title='Delete'
                    style={styles.button}
                    onPress={this.props.deletePost}
                />
            </View>
      
    );
  }
}

export default Post;

