import React from 'react';
import { createNativeStackNavigator, NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Home, Post } from '../screens';
import { Header } from '../components'

const Stack = createNativeStackNavigator();
const BaseNavigator = () => (
    <Stack.Navigator screenOptions={{
        header: ({ route: { name } }: NativeStackHeaderProps) => <Header hasBack={name !== 'Home'} />,
        contentStyle: {
            elevation: 0
        }
    }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
)

export default BaseNavigator;
