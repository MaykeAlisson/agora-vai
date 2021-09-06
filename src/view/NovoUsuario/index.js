import React, { useState } from "react";
import { Alert, Button, SafeAreaView, Text, TextInput, View } from "react-native";

import Cores from "../../util/Cores";
import styles from "./styles";
import isEmpty from "../../util/isEmpty";
import gravarArquivo from "../../util/File/gravarArquivo";

const NovoUsuario = () => {

  const [nome, setNome] = useState("");

  const criarDataBase = () => {
    if (isEmpty(nome)){
      Alert.alert('Nome invalido');
      return;
    }
    let db = {};
    db.nome = nome;
    db.metas = [];
    try {
      gravarArquivo(db);
    } catch (e) {
      Alert.alert('Error: ', e);
    }
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
