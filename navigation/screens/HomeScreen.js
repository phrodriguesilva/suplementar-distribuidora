import React from 'react';
import { View, Text} from 'react-native';
import { WebView } from 'react-native-webview';

export default function HomeScreen({navigation}) {
    return(
        <WebView
        source={{ uri: 'https://suplementardistribuidora.com.br/' }}
        style={{ marginTop: 0 }}
      />
    )

}