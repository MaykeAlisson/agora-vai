import React, { useState } from "react";
import { Alert, Button, SafeAreaView, Text, TextInput, View } from "react-native";

import Cores from "../../util/Cores";

import styles from "./styles";
import RNFS from "react-native-fs";

const NovoUsuario = () => {

  const [nome, setNome] = useState("");

  // const RNFS = require('react-native-fs');

  const criarDataBase = () => {

    const path = RNFS.DocumentDirectoryPath + '/test.txt';
    RNFS.readDir(RNFS.DocumentDirectoryPath)
      .then((result) => {
        console.log('GOT RESULT', result);
      })
    // write the file
    RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
      .then((success) => {
        console.log(success)
        console.log('FILE WRITTEN!');
        console.log(path);
       RNFS.exists(path).then((result)=>{console.log(result)}).catch((error)=>{console.log(error)});
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <SafeAreaView>
        <Text style={styles.primeiroTitulo}>Ola,</Text>
        <Text style={styles.segundoTitulo}>Comece com o primeiro passo !</Text>
      <View style={styles.sessionName}>
        <TextInput
          style={styles.inputNome}
          placeholder="Qual e seu nome ?"
          autoCapitalize="sentences"
          onChangeText={setNome}
          value={nome}
        />
        <View style={styles.btnCadastro}>
          <Button
            title={"Criar Conta"}
            color={Cores.primary}
            onPress={() => criarDataBase()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NovoUsuario;
