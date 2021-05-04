import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Note, Alert, Home } from '../screens/index';

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator
            initialRouteName="GetNotes"
            headerMode="screen"
            screenOptions={{
                headerTintColor: '#F0F0F5',
                headerStyle: { backgroundColor: '#050508' },
            }}
        >
            <Stack.Screen name='GetNotes' component={Home}
                options={{
                    title: 'Notes',
                    style: {
                        color: '#DDDD'
                    }
                }}
            />
            <Stack.Screen name='PostNote' component={Note} />
            <Stack.Screen name='GetAlert' component={Alert} />
        </Stack.Navigator>
    );
}

