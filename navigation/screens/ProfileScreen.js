import React from 'react';
import { SafeAreaView, View, Text} from 'react-native';
import { WebView } from 'react-native-webview';

export default function profileScreen({navigation}) {
    return(
      <SafeAreaView style={{ flex: 1 }}>
      <View style={{backgroundColor: 'black', height: 60}}>
      </View>
        <WebView
        source={{ uri: 'https://suplementardistribuidora.com.br/minha-conta/' }}
        style={{ marginTop: 0 }}
        
      />
      </SafeAreaView>
    )

}