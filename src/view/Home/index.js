import React, { useState } from "react";
import { Alert, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import Cores from "../../util/Cores";
import styles from "./styles";
import Card from "./components/Card";

const Home = () => {

  const [nome, setNome] = useState("Mayke");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.nomeApp}>Agora Vai!</Text>
      <Text style={styles.titulo}>Ola, {nome} </Text>
      <Text style={styles.frase}>Frase motivacional aleatoria</Text>
      <View style={styles.sessionNew}>
        <Text style={styles.textoData}>Terça 10 de Dezembro de 2021</Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.2)',
              alignItems: 'center',
              justifyContent: 'center',
              width: 25,
              position: 'absolute',
              bottom: 5,
              right: 50,
              height: 25,
              backgroundColor: Cores.branco,
              borderRadius: 100,
            }}
          >
            <Icon
              name='plus'
              size={18} color='#000'
              onPress={() => Alert.alert('add card')}
            />
          </TouchableOpacity>
      </View>
      <Card/>
    </SafeAreaView>
  );
};

export default Home;
