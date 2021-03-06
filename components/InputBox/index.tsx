import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';

const InputBox = () => {

    const [message, setMessage] = useState('');

    const onMicrophonePress = () => {
        console.warn('Microphone');
    }
    
    const onSendPress = () => {
        console.warn(`Sending: ${message}`);

        // Send message to backend
        
        setMessage('');
    }

    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name='laugh-beam' size={24} color='grey' />
                <TextInput
                placeholder='Type a message'
                style={styles.textInput}
                multiline
                value={message}
                onChangeText={setMessage}
                />
                <Entypo name='attachment' size={24} color='grey' style={styles.icon} />
                {/* If message is not null then hide camera */}
                {!message && <Fontisto name='camera' size={24} color='grey' style={styles.icon} /> }
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                    {/* If message is null set icon microphone if not use send */}
                    {!message ? <MaterialCommunityIcons name='microphone' size={28} color='white' />
                        : <MaterialIcons name='send' size={28} color='white' />
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox;
