import React from 'react';
import { View, Text} from 'react-native';
import { WebView } from 'react-native-webview';

export default function profileScreen({navigation}) {
    return(
        <WebView
        source={{ uri: 'https://suplementardistribuidora.com.br/minha-conta/' }}
        style={{ marginTop: 0 }}
      />
    )

}