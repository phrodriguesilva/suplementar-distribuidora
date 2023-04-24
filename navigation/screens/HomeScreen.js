import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, View, Text, Button} from 'react-native';
import { WebView } from 'react-native-webview';

export default function HomeScreen({navigation}) {

  return(
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{backgroundColor: 'black', height: 60}}>
      </View>

        <WebView
        source={{ uri: 'https://suplementardistribuidora.com.br/' }}
        style={{ marginTop: 0, backgroundColor: 'black', borderBottomColor: 'black', color: 'black'}}

        
      />
          </SafeAreaView>
    )

}