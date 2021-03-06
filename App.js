import 'react-native-gesture-handler';
import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import PostsFeed from './components/PostsFeed';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import newPost from './components/newPost';

const Stack = createStackNavigator();

export default function App() {
  return (   
        <NavigationContainer> 
            <Stack.Navigator>
                <Stack.Screen 
                  name="Posts" 
                  component={PostsFeed} 
                  options={{ 
                    title: 'Posts feed',
                    headerStyle: {backgroundColor: '#006dc7'},
                    headerTintColor: '#fff',
                    headerStatusBarHeight: 50,
                    headerTitleStyle: {fontWeight: '500', fontSize: 25, marginBottom: 10}
                  }}/>
                <Stack.Screen 
                  name="Signup" 
                  component={Signup} 
                  options={{ 
                    title: 'Create your account',
                    headerStyle: {backgroundColor: '#006dc7'},
                    headerTintColor: '#fff',
                    headerStatusBarHeight: 50,
                    headerTitleStyle: {fontWeight: '500', fontSize: 25, marginBottom: 10}
                  }}/>
                <Stack.Screen 
                  name="Login" 
                  component={Login} 
                  options={{ 
                    title: 'Login',
                    headerStyle: {backgroundColor: '#006dc7'},
                    headerTintColor: '#fff',
                    headerStatusBarHeight: 50,
                    headerTitleStyle: {fontWeight: '500', fontSize: 25, marginBottom: 10}
                  }}/>
                <Stack.Screen 
                  name="newPost" 
                  component={newPost} 
                  options={{ 
                    title: 'Create a new post',
                    headerStyle: {backgroundColor: '#006dc7'},
                    headerTintColor: '#fff',
                    headerStatusBarHeight: 50,
                    headerTitleStyle: {fontWeight: '500', fontSize: 25, marginBottom: 10}
                  }}/>
            </Stack.Navigator>
        </NavigationContainer>
  );
}
