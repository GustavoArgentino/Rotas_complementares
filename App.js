import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Gustavo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        O que eu quero que você faça??
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Gabriel"
          onPress={() => navigation.navigate('Gabriel')}
          color="#008080" // Personalize a cor conforme desejado
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Victor"
          onPress={() => navigation.navigate('Victor')}
          color="#800080" // Personalize a cor conforme desejado
        />
      </View>
    </View>
  );
}

function Gabriel({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      Gabriel é um amigo de confiança porque sempre demonstrou lealdade e chupou laranja comigo. Mas agora, você consegue imitar o som e os movimentos engraçados de uma galinha?
      </Text>
    </View>
  );
}

function Victor({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      Victor é um amigo de confiança porque sempre demonstrou lealdade e chupou laranja comigo. Mas agora, vamos embarcar em uma aventura imaginária, feche os olhos e sinta o vento soprando enquanto você pilota um avião veloz! Faça os sons característicos do motor e incline suas asas imaginárias.
      </Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Cor de fundo para a tela
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20, // Adiciona um espaçamento horizontal para melhor legibilidade
  },
  buttonContainer: {
    width: '50%',
    marginBottom: 10,
  },
});


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gustavo">
        <Stack.Screen name="Gustavo" component={Gustavo} />
        <Stack.Screen name="Gabriel" component={Gabriel} />
        <Stack.Screen name="Victor" component={Victor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
