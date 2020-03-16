import React, {Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';



class Post extends Component {

    constructor(props){
        super(props);
    }


render() {

    const styles = StyleSheet.create({
        content: {
            flex: 1,
            margin: 30,
        },
        title: {
            fontWeight: 'bold',
            color: 'black',
            fontSize: 15,
            margin: 5,
            textAlign: 'center'
        }
    });


    return (
             <View style={styles.content}>
                 <Text style={styles.title}>Title: {this.props.title}</Text>
                 <Text style={styles.title}>Description: {this.props.description}</Text>
                 <Text style={styles.title}>Category: {this.props.category}</Text>
                 <Text style={styles.title}>Country: {this.props.country}</Text>
                 <Text style={styles.title}>City: {this.props.city}</Text>
                 <Text style={styles.title}>Images: {this.props.images}</Text>
                 <Text style={styles.title}>Price: {this.props.price}</Text>
                 <Text style={styles.title}>Date of Post: {this.props.postDate}</Text>
                 <Text style={styles.title}>Delivery Type: {this.props.deliveryType}</Text>
                 <Text style={styles.title}>Name of Seller: {this.props.sellerName}</Text>
                 <Text style={styles.title}>Mobile Number: {this.props.mobile}</Text>
            </View>
    );
  }
}

export default Post;

