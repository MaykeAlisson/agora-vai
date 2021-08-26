import React, { useState } from 'react';
import { Alert, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Dialog from "react-native-dialog";

import styles from "./styles";
import Card from "./components/Card";

const Home = () => {

  const [nome, setNome] = useState("Mayke");
  const [nomeMeta, setNomeMeta] = useState("");
  const [visible, setVisible] = useState(false);

  const createTarefa = () => {
    setVisible(false);
    Alert.alert(nomeMeta);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
      <Text style={styles.nomeApp}>Agora Vai!</Text>
      <Text style={styles.titulo}>Ola, {nome} </Text>
      <Text style={styles.frase}>Frase motivacional aleatoria</Text>
      <View style={styles.sessionNew}>
        <Text style={styles.textoData}>Terça 10 de Dezembro de 2021</Text>
          <TouchableOpacity
            style={styles.btnPlus}
            onPress={() => setVisible(true)}
          >
            <MaterialIcons name="add-task" size={25} color="black" />
          </TouchableOpacity>
      </View>
      </View>
    <View style={{flex: 3}}>
      <Card/>
    </View>
      <View style={styles.containerDialog}>
        <Dialog.Container visible={visible}>
          <Dialog.Title>Nova Meta</Dialog.Title>
          <TextInput
            style={styles.inputNomeMeta}
            placeholder="Qual nome da nova meta?"
            autoCapitalize="sentences"
            onChangeText={setNomeMeta}
            value={nomeMeta}
          />
          <Dialog.Button label="Cancelar" onPress={() => setVisible(false)} />
          <Dialog.Button label="Salvar" onPress={createTarefa} />
        </Dialog.Container>
        </View>
    </SafeAreaView>
  );
};

export default Home;
